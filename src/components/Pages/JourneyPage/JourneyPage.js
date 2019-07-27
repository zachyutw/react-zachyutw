import React, { useContext, useCallback, useState, useRef, useEffect, useMemo } from 'react';
import GeocationContext, { withGeocation } from '../../../contexts/Geocation/GeocationContext';
import Layout from '../../App/Layout/Layout';
import PageP from '../../App/PageP/PageP';
import SectionP from '../../App/SectionP/SectionP';
import GeoJourney from '../../Geo/GeoJourney/GeoJourney';

import s from './JourneyPage.module.css';

const JourneyPage = (props) => {
    const { match: { params: { target } } } = props;
    const { index } = useContext(GeocationContext);

    return (
        <Layout>
            <PageP>
                {/* <CameraUserMedia /> */}
                <div className='ui container'>
                    <SectionP>
                        <div className={s.btns}>
                            <GeoJourney.BtnMine />
                        </div>

                        <GeoJourney.Items />
                        {/* <GeoJourney.Form name={target} /> */}
                        <GeoJourney.Map />
                    </SectionP>
                </div>
            </PageP>
        </Layout>
    );
};

export default withGeocation(JourneyPage);
