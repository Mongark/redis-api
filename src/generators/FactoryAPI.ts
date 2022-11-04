/**
 * 
 * API factory class
 * 
 */

import { Request, Response } from "express";
import { Model } from "mongoose";

interface Endpoint {
    body: string,
    type: string,
}

interface Action {
    type: string,
    action: any,
}

const Actions = [
    {
        type: "GET_ONEx",
        action: (model: Model<any>, id: string) => {
            return(model.findById( id ));
        },
    },
];

const ServiceFactory = {
    create(endpoint: Endpoint, model: Model<any>) {
        if( Actions.find((item: Action) => item.type == endpoint.type) ) {
            return Actions.find((item: Action) => item.type == endpoint.type).action(model, endpoint.body);
        }
        return("{}");
    }
}

export {
    ServiceFactory,
    Endpoint,
};