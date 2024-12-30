import React, {Component} from "react";
import './EyeComponent.scss';

export default class EyeComponent extends Component<any, any> {
    private readonly pupilRef1: React.RefObject<any>;
    private readonly pupilRef2: React.RefObject<any>;
    private readonly eyeSvgRef: React.RefObject<any>;

    constructor(props: any) {
        super(props);
        this.pupilRef1 = React.createRef();
        this.pupilRef2 = React.createRef();
        this.eyeSvgRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.handleMouseMove(e , this.pupilRef1.current);
            this.handleMouseMove(e , this.pupilRef2.current);
        });
    }

    private handleMouseMove(e: MouseEvent , eyeElement:Element) {
        const rect = this.eyeSvgRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.sqrt(deltaX**2 + deltaY**2), 40);

        const pupilX = 150 + Math.cos(angle) * distance;
        const pupilY = 150 + Math.sin(angle) * distance;

        eyeElement.setAttribute('cx', String(pupilX));
        eyeElement.setAttribute('cy', String(pupilY));
    }

    render() {
        return (<div className="eyes-container">
            <div className="eye">
                <svg className="eye-svg" ref={this.eyeSvgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                    <circle cx="150" cy="150" r="100" fill="white" stroke="black" strokeWidth="5"/>
                    <circle cx="150" cy="150" r="60" fill="url(#irisGradient)"/>
                    <circle cx="150" cy="150" r="30" fill="black" className="pupil" ref={this.pupilRef1}/>

                    <defs>
                        <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#1c5d99"/>
                            <stop offset="70%" stopColor="#3fa0ff"/>
                            <stop offset="100%" stopColor="#1c5d99"/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <div className="eye">
                <svg className="eye-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                    <circle cx="150" cy="150" r="100" fill="white" stroke="black" strokeWidth="5"/>
                    <circle cx="150" cy="150" r="60" fill="url(#irisGradient)"/>
                    <circle cx="150" cy="150" r="30" fill="black" className="pupil" ref={this.pupilRef2}/>

                    <defs>
                        <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#1c5d99"/>
                            <stop offset="70%" stopColor="#3fa0ff"/>
                            <stop offset="100%" stopColor="#1c5d99"/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>);
    }

}