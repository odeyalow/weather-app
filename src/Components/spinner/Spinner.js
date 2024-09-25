import { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" 
            style={{
                maxWidth: this.props.size, 
                // display:'block', 
                margin: this.props.margin}} viewBox="0 0 200 200">
                <circle fill={this.props.color} stroke={this.props.color} strokeWidth="20" r="15" cx="40" cy="65">
                    <animate 
                    attributeName="cy" 
                    calcMode="spline" 
                    dur="1" 
                    values="65;135;65;" 
                    keySplines=".5 0 .5 1;.5 0 .5 1" 
                    repeatCount="indefinite" 
                    begin="-.4" 
                    />
                </circle>
                <circle fill={this.props.color} stroke={this.props.color} strokeWidth="20" r="15" cx="100" cy="65">
                    <animate 
                    attributeName="cy" 
                    calcMode="spline" 
                    dur="1" 
                    values="65;135;65;" 
                    keySplines=".5 0 .5 1;.5 0 .5 1" 
                    repeatCount="indefinite" 
                    begin="-.2" 
                    />
                </circle>
                <circle fill={this.props.color} stroke={this.props.color} strokeWidth="20" r="15" cx="160" cy="65">
                    <animate 
                    attributeName="cy" 
                    calcMode="spline" 
                    dur="1" 
                    values="65;135;65;" 
                    keySplines=".5 0 .5 1;.5 0 .5 1" 
                    repeatCount="indefinite" 
                    begin="0" 
                    />
                </circle>
            </svg>
        )
    }
}

export default Spinner;