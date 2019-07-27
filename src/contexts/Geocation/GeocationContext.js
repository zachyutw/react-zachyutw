import React, { createContext, useReducer, useCallback, useState, useMemo, useEffect, useContext } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { distanceLoaction, delay, localStorageSafe } from '../../lib';
import useGPS from '../../hooks/useGPS';
import placesGeojson from '../../static/geojson/placesGeojson.json';
import Joi from 'joi';
import uuid from 'uuid';

const JourneySchema = Joi.object({
    place_id: Joi.any().empty(),
    image: Joi.any().empty(),
    position: Joi.object({ lat: Joi.number(), lng: Joi.number() }).required(),
    zoom: Joi.number(),
    pov: Joi.object({ heading: Joi.number(), pitch: Joi.number() }).required(),
    text: Joi.string(),
    __html: Joi.string()
});
const Journey = ({ place_id, image, position, zoom, pov, title, __html }) => {
    return { id: uuid.v4(), place_id, image, position, zoom, pov, title, __html };
};
const validate = async (journey) => {
    try {
        return await JourneySchema.validate(journey).then((value) => value);
    } catch (err) {
        console.log(err);
    }
};

const initJourney = {
    id: null,
    place_id: null,
    position: { lat: 24.79549369556885, lng: 120.98058667659257 },
    zoom: 8,
    image: {},
    pov: {
        heading: 160.0645145746409,
        pitch: 6.050825854995736
    },
    title: '',
    __html: ``
};

const mineJourneyData = {
    nhshs: Journey({
        place_id: 'ChIJ1cPOouY1aDQRa9Z-ozd_kzk',
        position: { lat: 24.79549369556885, lng: 120.98058667659257 },
        zoom: 8,
        pov: {
            heading: 160.0645145746409,
            pitch: 6.050825854995736
        },
        title: 'My Start',
        __html: 'My high school, <b> National Hsinchu Senior High School </b>  which teach that no matter what the environment, be yourselfs'
    }),
    cycu: Journey({
        key: 'cycu',
        place_id: 'ChIJ3fW0jRUiaDQR38MUWCeH1w0',
        position: { lat: 24.95721532575274, lng: 121.24037346753119 },
        zoom: 9,
        pov: {
            heading: 56.79792334562531,
            pitch: 6.050825854995736
        },
        title: 'Learning and Thinking',
        __html:
            '#Chung Yuan Christian University \n - I have graded in the CYCU of Electronic Circuit Engineering. However, it was the darkest of my days. \n - I failed in everything I tried, except some coding courses  \n - Therefore, I decided to change my life to get a different life.'
    }),
    bcit: Journey({
        key: 'bcit',
        place_id: 'ChIJ-ZMIHuB2hlQRFzW9EC-ikbY',
        position: { lat: 49.25158070179947, lng: -123.00355170298383 },
        zoom: 12,
        pov: {
            heading: 158.22706027574722,
            pitch: 25.398946051790958
        },
        title: 'Study in Vancouver',
        __html: `# BCIT \n - I had a good time in BCIT for two years diploma. Learn how to live and get along with diffenent cutures classmates. \n - In this two years, I grew a lot.`
    }),
    work: Journey({
        key: 'work',
        place_id: 'ChIJ36xQEX9xhlQRwNeJXVjLDPs',
        position: { lat: 49.28241182808894, lng: -123.11831511814592 },
        zoom: 12,
        pov: {
            heading: 65.21150807128505,
            pitch: 0.05830758842037653
        },
        title: 'Current',
        __html: '#Current FullStack NodeJS and ReactJS developer \n '
    })
};
const mineJourneys = Object.values(mineJourneyData);

const placePhotosToImage = (photo = {}) => {
    const { src = 'https://loremflickr.com/g/320/240/nature,girl/all?random=' + _.random(1, 100, false), tags = '', width = 200, height = 200 } = photo;
    if (!_.isEmpty(photo)) {
        src = photo.getUrl();
        width = photo.width;
        height = photo.height;
    }
    return { src, tags, width, height };
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'setPlaceValue':
            console.log(action.place);
            return {
                ...state,
                item: {
                    ...state.item,
                    place_id: action.place.place_id,
                    zoom: Math.floor(action.place.address_components.length * 2.8),
                    position: { lat: action.place.geometry.location.lat(), lng: action.place.geometry.location.lng() },
                    image: placePhotosToImage(_.head(action.place.photos))
                }
            };
        case 'patchValue':
            console.log(action);
            return { ...state, item: { ...state.item, [action.payload.name]: action.payload.value } };
        case 'setZoom':
            return { ...state, item: { ...state.item, zoom: action.zoom } };
        case 'setPov':
            return { ...state, item: { ...state.item, pov: action.pov } };
        case 'setPostion':
            return { ...state, item: { ...state.item, position: action.position } };
        case 'postItem':
            console.log('123');
            return { ...state, item: action.item };
        case 'editItem':
            return { ...state };
        default:
            return { ...state };
    }
};

const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'getItem':
            const getItem = state.items.find(({ id }) => id === action.item.id);
            if (getItem && action.dispatch) {
                action.dispatch({ type: 'postItem', item: getItem });
            }

            return { ...state };
        case 'postItem':
            const postedItems = [ ...state.items, action.item ];
            localStorageSafe.setItem('journeys', postedItems);
            return { ...state, items: postedItems };
        case 'deleteItem':
            const deletedItems = _.reject(state.items, ({ id }) => id === action.item.id);
            localStorageSafe.setItem('journeys', deletedItems);
            return { ...state, items: deletedItems };
        case 'getItems':
            console.log(action.items);
            localStorageSafe.setItem('journeys', action.items);
            return { ...state, items: [ ...action.items ] };
        case 'getMineItems':
            return { ...state, items: mineJourneys };
        case 'initItems':
            return { ...state, items: [] };
        default:
            return { ...state };
    }
};
export const places = placesGeojson;
const Context = createContext({});

const Provider = withRouter((props) => {
    const { match: { params: { target } } } = props;
    const [ sectionName, setSectionName ] = useState('create');
    const [ state, dispatch ] = useReducer(reducer, { item: initJourney });
    const [ itemsState, itemsDispatch ] = useReducer(itemsReducer, { items: localStorageSafe.getItem('journeys') || [] });
    const [ index, setIndex ] = useState(0);
    const [ pointerMarker, setPMker ] = useState({});
    const [ gps ] = useGPS(true);
    const [ deretion, setDeretion ] = useState(1);
    const [ google, setGoogle ] = useState(null);
    const [ place, setPlace ] = useState({});
    const handleOnPageLoad = useCallback((data) => {
        switch (data.name) {
            default:
                console.log('not set');
                break;
        }
    }, []);

    // useEffect(
    //     () => {

    //         JourneySchema.validate(journey).then((value) => value).catch();
    //     },
    //     [ journey ]
    // );
    const handleOnChange = useCallback((e, data) => {
        // console.log(data.name, data.value);
        console.log(data);
        switch (data.actionType) {
            case 'getItems':
                itemsDispatch({ type: 'getItems', items: data.items });
                break;
            case 'getItem':
                itemsDispatch({ type: 'getItem', [data.name]: data.value, dispatch });
                break;
            case 'setPlaceValue':
                dispatch({ type: 'setPlaceValue', place: data.place });
                break;
            case 'patchValue':
                dispatch({ type: 'patchValue', payload: data });
                break;
            case 'setPoint':
                dispatch({ type: 'setPostion', position: { lat: data.point.latLng.lat(), lng: data.point.latLng.lng() } });
                break;
            case 'onStreetViewPosition':
                break;
            case 'onStreetViewPov':
                // putJourney({ panorama: data.value });
                break;
            case 'add':
                setDeretion(1);
                setIndex((state) => state + 1);
                break;
            case 'minus':
                setDeretion(-1);
                setIndex((state) => state - 1);
                break;
            case 'mapZoomChange':
                console.log(data);
                // putJourney({ map: data.value });
                break;
            case 'toEdit':
                window.scrollTo({ behavior: 'smooth', top: document.getElementById('journey-form').offsetTop });
                console.log(data);
                break;
            case 'postItem':
                const _postItem = Journey({ ...data.value.item, zoom: data.value.google.map.getZoom(), pov: data.value.google.map.getStreetView().getPov() });
                dispatch({ type: 'postItem', item: _postItem });
                itemsDispatch({ type: 'postItem', item: _postItem });
                break;
            default:
                itemsDispatch({ type: data.actionType, ...data });
                console.log('not set');
                break;
        }
    }, []);

    return (
        <Context.Provider
            value={{
                sectionName,
                google,
                pointerMarker,
                gps,
                itemsState,
                initJourney,
                index,
                state,
                onPageLoad: handleOnPageLoad,
                onChange: handleOnChange
            }}>
            {props.children}
        </Context.Provider>
    );
});

export const withGeocation = (Componet) => (props) => {
    return (
        <Provider>
            <Componet {...props} />
        </Provider>
    );
};
export default Context;

const movingMap = async (google, lastPosition, newPosition, zoom, pov) => {
    const { map } = google;
    const twoPointsdistance = distanceLoaction(lastPosition, newPosition);
    const ANIMATION_MOVING_DISTANCE = 500;
    if (twoPointsdistance > ANIMATION_MOVING_DISTANCE) {
        map.setZoom(4);
        await delay(1000);
        // map.panTo({ lat: newPosition.lat, lng: Math.abs(newPosition.lng) >= 90 ? 179 : 0 });
        // await delay(1500);
        console.log(map.getZoom());
    }
    map.panTo(newPosition);
    if (twoPointsdistance > ANIMATION_MOVING_DISTANCE) {
        await delay(50);
        for (let i = 1; i < zoom - 1; i++) {
            map.setZoom(i);
            await delay(150);
        }
    }

    map.setZoom(zoom);
    map.streetView.setPosition(newPosition);
    map.streetView.setPov(pov);
};
export const useGoogleMapAction = (google, position, zoom, pov) => {
    const [ _position, setPosition ] = useState(position);
    useEffect(
        () => {
            if (google) {
                setPosition((_position) => {
                    movingMap(google, _position, position, zoom, pov);
                    return position;
                });
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
    return { lastPosition: _position, position };
};

export const initlizeStreetViewPanorama = (google, ref) => {
    const panorama = new google.maps.StreetViewPanorama(ref.current, {
        position: google.map.getCenter(),
        pov: {
            heading: 160.0645145746409,
            pitch: 6.050825854995736
        },
        addressControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        linksControl: false,
        panControl: false,
        enableCloseButton: false,
        zoomControl: false,
        fullscreenControl: false
    });
    google.map.setStreetView(panorama);
};

export const googleMapStyles = [
    {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
            {
                saturation: 36
            },
            {
                color: '#000000'
            },
            {
                lightness: 40
            }
        ]
    },
    {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                visibility: 'on'
            },
            {
                color: '#000000'
            },
            {
                lightness: 16
            }
        ]
    },
    {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
            {
                lightness: 20
            },
            {
                color: '#000000'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
            {
                lightness: 17
            },
            {
                weight: 1.2
            },
            {
                color: '#000000'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.country',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.province',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
            {
                weight: '1.98'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            {
                lightness: 20
            },
            {
                color: '#000000'
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
            {
                visibility: 'on'
            },
            {
                color: '#000000'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
            {
                color: '#000000'
            },
            {
                lightness: 21
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#cbb26d'
            },
            {
                lightness: 17
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#000000'
            },
            {
                lightness: 29
            },
            {
                weight: 0.2
            }
        ]
    },
    {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
            {
                color: '#000000'
            },
            {
                lightness: 18
            }
        ]
    },
    {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
            {
                color: '#000000'
            },
            {
                lightness: 16
            }
        ]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
            {
                color: '#000000'
            },
            {
                lightness: 19
            }
        ]
    },
    {
        featureType: 'transit',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#cbb26d'
            },
            {
                lightness: 17
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    }
];
