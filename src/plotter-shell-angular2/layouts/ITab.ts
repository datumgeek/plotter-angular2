import { ViewInstanceJSON } from '../../plotter-shell-model'

export interface ITab {
    title: string;
    header?: ViewInstanceJSON;
    tabs: ITab[];
}