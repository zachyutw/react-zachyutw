import _ from 'lodash';
import base64ToBlobFunc from './base64ToBlob';
import copyStringToClipboardFunc from './copyStringToClipboard';
import snapVideoFunc from './snapVideo';
export const pickByIdentity = (meta) => _.keys(_.pickBy(meta, _.identity)).join(' ');
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const base64ToBlob = base64ToBlobFunc;
export const copyStringToClipboard = copyStringToClipboardFunc;
export const bodyRect = document.body.getBoundingClientRect();
export const getElementOffestTop = (el) => el.getBoundingClientRect().top - bodyRect.top;
export const snapVideo = snapVideoFunc;
export const centerSort = (fields = []) => {
    const reverseFields = _.reverse(fields.slice());
    let list = [];
    reverseFields.map((field, index) => {
        if (index % 2 === 0) {
            list.push(field);
        }
    });
    fields.map((field, index) => {
        if (index % 2 === 1) {
            list.push(field);
        }
    });
    return list;
};

export const localStorageSafe = {
    getItem: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (err) {
            return localStorage.getItem(key) ? localStorage.getItem(key) : null;
        }
    },
    setItem: (key, data) => {
        localStorage.setItem(key, typeof data === 'object' ? JSON.stringify(data) : data);
    }
};
export const middlePoint = ({ lat: lat1, lng: lng1 }, { lat: lat2, lng: lng2 }) => {
    return { lat: (lat1 + lat2) / 2, lng: (lng1 + lng2) / 2 };
};
export function distanceLoaction ({ lat: lat1, lng: lng1 }, { lat: lat2, lng: lng2 }, unit = 'K'){
    var radlat1 = Math.PI * lat2 / 180;
    var radlat2 = Math.PI * lat1 / 180;
    var radlon1 = Math.PI * lng1 / 180;
    var radlon2 = Math.PI * lng2 / 180;
    var theta = lng1 - lng2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === 'K') {
        dist = dist * 1.609344;
    }
    if (unit === 'N') {
        dist = dist * 0.8684;
    }
    return dist;
}
export function distance (coordinates1, coordinates2, unit = 'K'){
    var radlat1 = Math.PI * coordinates1[1] / 180;
    var radlat2 = Math.PI * coordinates2[1] / 180;
    var radlon1 = Math.PI * coordinates1[0] / 180;
    var radlon2 = Math.PI * coordinates2[0] / 180;
    var theta = coordinates1[0] - coordinates2[0];
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === 'K') {
        dist = dist * 1.609344;
    }
    if (unit === 'N') {
        dist = dist * 0.8684;
    }
    return dist;
}
