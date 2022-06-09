import moment from "moment";

export const getTime = () => {

   return moment().format('llll');
}

export const updateTime = setInterval(() => {
   return getTime()
}, 1000)