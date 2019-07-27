import React, { useEffect, useRef, useState, useCallback, useContext, useMemo } from 'react';
import _ from 'lodash';
import GoogleMapReact from 'google-map-react';
import InputTextareaP from '../../Input/InputTextareaP/InputTextareaP';
import InputP from '../../Input/InputP/InputP';
import ItemP from '../../App/ItemP/ItemP';
import InputAddress from '../../Input/InputAddress/InputAddress';
import GeocationContext, { googleMapStyles, places, initlizeStreetViewPanorama, useGoogleMapAction } from '../../../contexts/Geocation/GeocationContext';
import Point from '../Point/Point';
import Marker from '../Marker/Marker';
import StreetViewPanorama from '../StreetViewPanorama/StreetViewPanorama';
import useDragItems from '../../../hooks/useDragItems';
import s from './GeoJourney.module.css';
import Polyline from '../Polyline/Polyline';

const actionFields = [
    { actionType: 'toEdit', icon: 'trash edit outline' },
    {
        actionType: 'sendItem',
        icon: 'envelope outline'
    },
    { actionType: 'pinItem', icon: 'thumbtack' },
    { actionType: 'deleteItem', icon: 'trash alternate outline' }
];
const RightMenuBtn = ({ onChange = () => {}, item, fields = [] }) => {
    const [ actived, setActived ] = useState(false);
    const handleOnToggle = useCallback(() => {
        setActived((actived) => !actived);
    }, []);
    const handleOnChange = useCallback(
        (e) => {
            onChange(e, { actionType: e.target.getAttribute('data-action'), item });
        },
        [ item, onChange ]
    );

    return (
        <div className={s.menu}>
            <div>
                <div className={s.btns} style={{ display: actived !== true ? 'none' : '' }}>
                    {fields.map(({ actionType, icon }) => (
                        <span key={actionType}>
                            <i onClick={handleOnChange} data-action={actionType} className={`icon ${icon}`} />
                        </span>
                    ))}
                </div>
            </div>
            <i onClick={handleOnToggle} className='icon bars' />
        </div>
    );
};
const GeoJourneyItems = ({ className }) => {
    const { itemsState: { items }, onChange } = useContext(GeocationContext);
    const { handlers, draggingIndex, dragOverIndex, updateItems, isDragging } = useDragItems();
    // const [ scrollMoving ] = useWindowScroll();

    // const memoItems = useMemo(() => updateItems(items, draggingIndex, dragOverIndex), [ items, draggingIndex, dragOverIndex ]);
    useEffect(
        () => {
            if (dragOverIndex) {
                onChange(null, { actionType: 'getItems', items: updateItems(items, draggingIndex, dragOverIndex) });
            }
        },
        [ dragOverIndex ]
    );

    return (
        <div className={[ className, 'fixedContent-1 right', s.items ].join(' ')}>
            {items.map((item, index) => <GeoJourneyItem onChange={onChange} data-index={index} index={index} className={[ 'todo' ].join(' ')} {...handlers} actionType='getItem' name='item' key={item.id} item={item} />)}
        </div>
    );
};
const GeoJourneyItem = ({ item, name, actionType, onChange, index, ...rest }) => {
    const { image = {}, title, __html } = item;

    return (
        <ItemP onChange={onChange} index={index} actionType={actionType} value={item} name={name} src={image.src} {...rest}>
            <div className={s.content}>
                <h4 className='title'>{title}</h4>
                <div className='desc' dangerouslySetInnerHTML={{ __html }} />
            </div>
            <RightMenuBtn item={item} onChange={onChange} fields={actionFields} />
        </ItemP>
    );
};

const GeoJourneyItemBtnMine = () => {
    const { onChange } = useContext(GeocationContext);
    return (
        <ItemP actionType='getMineItems' name='items' onChange={onChange} className='ui button'>
            Mine
        </ItemP>
    );
};

const GeoJourneyForm = ({ children }) => {
    const [ google, setGoolge ] = useState(null);
    const { sectionName, onChange, initJourney, state: { item } } = useContext(GeocationContext);
    const { position, zoom } = item;
    useEffect(
        () => {
            if (google) {
                google.map.setCenter(position);
                google.map.getStreetView().setPosition(position);
            }
        },
        [ position ]
    );
    useEffect(
        () => {
            if (google) {
                google.map.setZoom(zoom);
            }
        },
        [ zoom ]
    );

    const handleOnGoogleApiLoaded = useCallback((google) => {
        const { map } = google;
        map.addListener('click', (point) => {
            console.log(point);
            onChange(null, { actionType: 'setPoint', name: 'point', point });
        });
        onChange(null, { actionType: 'getMap', name: 'map', map: google.map });
        setGoolge(google);
    }, []);
    const handleOnSubmit = useCallback(
        (e, data) => {
            console.log(data);
            onChange(e, data);
        },
        [ onChange ]
    );
    return (
        <div id='journey-form' style={{ display: sectionName !== 'read' ? 'block' : 'none' }}>
            <div className='ui form'>
                <div>
                    <label>Address</label>
                    <InputAddress defaultValue={''} name='address' actionType='setPlaceValue' onPlace={onChange} />
                </div>
                <div>
                    <label>Title</label>
                    <InputP defaultValue={item['title']} className='ui input' actionType='patchValue' name='title' onChange={onChange} />
                </div>
                <div>
                    <label>Content</label>
                    <InputTextareaP defaultValue={item['__html']} className='ui input textarea' actionType='patchValue' name='__html' onChange={onChange} />
                </div>

                <ItemP actionType='postItem' name='item' value={{ google, item }} className='btn ui button primary' onChange={handleOnSubmit}>
                    Save
                </ItemP>
            </div>
            <StreetViewPanorama visible={true} google={google} />
            <div className='map'>
                <GoogleMapReact
                    options={{ minZoom: 2, maxZoom: 15, styles: googleMapStyles, gestureHandling: 'greedy', zoomControl: false }}
                    defaultCenter={initJourney.position}
                    defaultZoom={initJourney.zoom}
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={handleOnGoogleApiLoaded}>
                    {children}
                </GoogleMapReact>
            </div>
        </div>
    );
};
const GeoJourenyInfoModal = ({ children, name, last, onChange = () => {}, onClose, className, items, cursor }) => {
    const item = useMemo(() => items[cursor], [ cursor, items ]);
    const { __html } = item;
    const handleOnMinus = useCallback((e) => {
        onChange(e, { actionType: 'minus' });
        // contextChange(e, { name: 'minus' });
    }, []);
    const handleOnAdd = useCallback((e) => {
        onChange(e, { actionType: 'add' });
        // contextChange(e, { name: 'add' });
    }, []);
    // const handleOnClick = useCallback((e) => {
    //     // onChange(e, { name: 'lastMarker', value: true });
    //     onClose();
    // }, []);
    return (
        <div className={[ 'InfoModal', className ].join(' ')}>
            <span>{cursor !== 0 && <i className='icon chevron left' onClick={handleOnMinus} />}</span>
            <div>
                <p dangerouslySetInnerHTML={{ __html }} />
                {children}
                <div className='row btns'>
                    <button onClick={onClose}>Cancel</button>
                    {cursor === items.length - 1 && <button onClick={onClose}>More</button>}
                </div>
            </div>

            <span>{cursor !== items.length - 1 && <i className='icon chevron right' onClick={handleOnAdd} />}</span>
        </div>
    );
};

const GeoJourneyItemMap = ({ children }) => {
    const [ google, setGoolge ] = useState(null);
    const { onChange, itemsState: { items } } = useContext(GeocationContext);
    const [ cursor, setCursor ] = useState(0);
    const [ hoverd, setHoverd ] = useState(false);
    const currentItem = useMemo(() => (items[cursor] ? items[cursor] : {}), [ items, cursor ]);
    const { position, zoom, pov } = currentItem;
    useGoogleMapAction(google, position, zoom, pov);
    const handleOnGoogleApiLoaded = useCallback((google) => {
        window.google = google;
        onChange(null, { actionType: 'getMap', name: 'map', map: google.map });
        setGoolge(google);
    }, []);

    const handleOnHoverdToggle = useCallback(() => {
        setHoverd((state) => !state);
    }, []);
    const handleOnChange = useCallback(
        (e, data) => {
            switch (data.actionType) {
                case 'minus':
                    setCursor((value) => (value > 0 ? value - 1 : value));
                    break;
                case 'add':
                    setCursor((value) => (value !== items.length ? value + 1 : value));
                    break;
                default:
                    break;
            }
        },
        [ items ]
    );

    return (
        <div className={s.map}>
            <StreetViewPanorama visible={true} google={google} />
            <GeoJourenyInfoModal items={items} cursor={cursor} className={hoverd ? 'hoverd' : 'hidden'} onChange={handleOnChange} onClose={handleOnHoverdToggle} />
            <div className='map'>
                <GoogleMapReact
                    options={{ minZoom: 2, maxZoom: 15, styles: googleMapStyles, gestureHandling: 'greedy', zoomControl: false }}
                    defaultCenter={_.head(items).position}
                    defaultZoom={_.head(items).zoom}
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={handleOnGoogleApiLoaded}>
                    {children}
                    {items.map(({ position, id, title }, index) => (
                        <Marker onClick={handleOnHoverdToggle} className={index == cursor ? 'current' : 'next'} key={'point' + id} lat={position.lat} lng={position.lng} text={index == cursor ? title : index + 1} />
                    ))}
                    <Polyline visible={true} path={items.map(({ position }) => position)} config={{ path: [] }} google={google} />

                    {/* {places.features.slice(0, actived ? places.features.length : 0).map(({ geometry, properties }, index) => {
                        const { coordinates } = geometry;
                        const [ lng, lat ] = coordinates;
                        return <Point key={index} lat={lat} lng={lng} properties={properties} geometry={geometry} />;
                    })} */}
                </GoogleMapReact>
            </div>
        </div>
    );
};
GeoJourneyItem.Form = GeoJourneyForm;
GeoJourneyItem.Items = GeoJourneyItems;
GeoJourneyItem.Map = GeoJourneyItemMap;
GeoJourneyItem.BtnMine = GeoJourneyItemBtnMine;
export default GeoJourneyItem;
