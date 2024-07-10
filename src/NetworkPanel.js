import React, { Component } from 'react';
import NetworkGraph from 'react-graph-vis'; // Update import

class NetworkPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: {
        nodes: [
          { id: 1, label: 'Node 1' },
          { id: 2, label: 'Node 2' },
          { id: 3, label: 'Node 3' },
          { id: 4, label: 'Node 4' },
          { id: 5, label: 'Node 5' }
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 }
        ]
      },
      options: {
        layout: {
          hierarchical: false
        },
        edges: {
          color: '#000000'
        },
        height: '500px'
      }
    };
  }

  render() {
    return (
      <div>
        <h2>Network Panel</h2>
        <NetworkGraph
          graph={this.state.graph}
          options={this.state.options}
          style={{ height: '500px' }}
        />
      </div>
    );
  }
}

export default NetworkPanel;
