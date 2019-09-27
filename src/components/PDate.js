import React from "react"
import {Component} from "react"


export class PDate extends Component{

    getTime(){
        return Math.round(new Date().getTime()/1000);
    }
    
    timestampToPersianDate(timestamp,array = false){
        let y = 1348 ;
        let m = 10;
        let d = 11 ;
        let h = 0;
        let i = 0;
        let s = 0;
        let r = [1, 5, 9, 13, 17, 22 , 26, 30];
        let t = timestamp;

        while (t > 0){
            if(t >= 316224 * 100) {
                if (r.includes(y%33)) {    // if is Leap year
                    t = t - (316224 * 100) // - 366 Days
                    y++
                } else {
                    t = t - (31536 * 1000) // - 365 Days
                    y++
                }
            } else if(t >= 31536 * 1000){
                if (!r.includes(y%33)) {
                    t = t - (31536 * 1000) // - 365 Days
                    y++
                }
            } else if(t >= 2678400){
                if( m < 7){ // if is summer
                    t = t - 2678400  // - 31 Days
                    if(m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }

                } else if( m < 12){
                    t = t - 2592000  // - 30 Days
                    if(m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }
                } else if(r.includes(y%33)){
                    t = t - 2592000  // - 30 Days
                    if(m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }
                } else {
                    t = t - 2505600 // - 29 Days
                    if(m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }
                }

            } else if(t >= 2592000){
                if( m < 12){
                    t = t - 2592000  // - 30 Days
                    if(m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }
                } else if(r.includes(y%33)){
                    t = t - 2592000  // - 30 Days
                    if(m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }
                } else {
                    t = t - 2505600 // - 29 Days
                    if(m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }
                }

            } else if(t >= 2505600){
                if(!r.includes(y%33) && m == 11) {
                    t = t - 2505600 // - 29 Days
                    if (m < 12) {
                        m++
                    } else {
                        m = 1;
                        y++;
                    }
                } else {
                    if(m < 7) {
                        if( d < 31){
                            d++;
                        } else {
                            d = 1;
                            m++
                        }
                    } else if(m < 12 ){
                        if( d < 30){
                            d++;
                        } else {
                            d = 1;
                            m++
                        }
                    } else if(r.includes(y%33)){
                        if( d < 30){
                            d++;
                        } else {
                            d = 1;
                            m = 1;
                            y++;
                        }
                    } else {
                        if( d < 29){
                            d++;
                        } else {
                            d = 1;
                            m = 1;
                            y++;
                        }
                    }
                    t = t - 86400;
                }
            } else if( t >= 86400){
                if(m < 7) {
                    if( d < 31){
                        d++;
                    } else {
                        d = 1;
                        m++
                    }
                } else if(m < 12 ){
                    if( d < 30){
                        d++;
                    } else {
                        d = 1;
                        m++
                    }
                } else if(r.includes(y%33)){
                    if( d < 30){
                        d++;
                    } else {
                        d = 1;
                        m = 1;
                        y++;
                    }
                } else {
                    if( d < 29){
                        d++;
                    } else {
                        d = 1;
                        m = 1;
                        y++;
                    }
                }
                t = t - 86400;
            } else {
                if(t >= 3600){
                    h++;
                    t = t - 3600
                } else if(t >= 60){
                    i++
                    t = t - 60
                } else {
                    s++
                    t--
                }

            }
        }
        if(array)
            return [y,m,d,h,i,s]
        else
            return y + "/" + this.zeroPad(m) + "/" + this.zeroPad(d) + " " + this.zeroPad(h) + ":" + this.zeroPad(i) + ":" + this.zeroPad(s)

    }

    zeroPad(nr,base,chr){
        var  len = (String(base||10).length - String(nr).length)+1;
        return len > 0? new Array(len).join(chr||'0')+nr : nr;
    }

    toPersianDate(Y,M = 1,D = 1,h = 0,i = 0,s = 0){
        if(M > 12 || M < 1 || Y < 1970 || D < 1 || D > 31)
            return console.error("incorrect date")

        let time = new Date(Y+"-"+M+"-"+D+ " "+this.zeroPad(h)+":"+this.zeroPad(i)+":"+this.zeroPad(s)).getTime() / 1000;
        time -= new Date().getTimezoneOffset()*60;

        return this.timestampToPersianDate(time)
    }

    render(){
        if(this.props.type == "timestamp")
            return(
                <time>{this.getTime()}</time>
            )
        if(this.props.type == "current")
            return(
                <time>{this.timestampToPersianDate(this.getTime())}</time>
            )
        if(this.props.type == "date")
            if(this.props.h == "undefined" || this.props.i == "undefined") {
                return (
                    <time>{this.toPersianDate(this.props.y, this.props.m, this.props.d ,false)}</time>
                )
            }else {
                return(
                    <time>{this.toPersianDate(this.props.y,this.props.m,this.props.d,this.props.h,this.props.i,this.props.s)}</time>
                )
            }


    }
}