declare module "react-graph-vis" {
    import { Network, NetworkEvents, Options, Node, Edge, DataSet, Data } from "vis";
    import { Component, CSSProperties } from "react";

    export { Network, NetworkEvents, Options, Node, Edge, DataSet, Data } from "vis";

    export type GraphEvents = {
        [event in NetworkEvents]?: (params?: any) => void;
    };

    export interface NetworkGraphProps {
        graph: Data;
        options?: Options;
        events?: GraphEvents;
        getNetwork?: (network: Network) => void;
        identifier?: string;
        style?: CSSProperties;
        getNodes?: (nodes: DataSet<Node>) => void;
        getEdges?: (edges: DataSet<Edge>) => void;
    }

    export interface NetworkGraphState {
        identifier: string;
    }

    export default class NetworkGraph extends Component<
        NetworkGraphProps,
        NetworkGraphState
        > {
        render(): JSX.Element;
    }
}
