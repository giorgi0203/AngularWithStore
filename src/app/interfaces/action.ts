/**
 * action creator type
 * this is a function template which is creating actions with payload and some meta
 */
export type ActionType = (payload: any, meta?: any) => Action;

/**
 * this inteface describes action which mast contain type
 * all actions are created inside actions module
 */
export interface Action {
    type: string;
    payload?: any;
    meta?: any;
}
