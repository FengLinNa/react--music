import React, {Component} from 'react';
import "./btn.css";

class Btn extends Component {

    constructor(props) {
        super(props);
        this.refAudio = React.createRef();
        this.state = {
            flag: false,
            clickStyle: {
                backgroundColor:"greenyellow",
            },
            normalStyle: {
                boxShadow:"10px 10px 15px #000000"
            }
        }
    }

    /*
    * 键盘事件 加在谁的身上
    * document
    * */

    componentDidMount() {
        //document
        document.addEventListener("keydown",(e)=>{
            //判断
            if (e.keyCode === this.props.keyCode) {
                let oAudio = this.refAudio.current;
                oAudio.currentTime = 0;
                oAudio.play();
                this.setFlag();
                this.props.onShow(this.props.id);
            }
        })
    }

    componentWillUnmount() {
        // document.removeEventListener("keydown");
    }

    setFlag() {
        //1:改变flag的值-->true
        this.setState({
            flag: true
        });

        //2:一段时间后变回来
        setTimeout(() => {
            this.setState({
                flag: false
            });
        }, 100);

    }


    render() {
        let {flag, clickStyle, normalStyle} = this.state;
        return (
            <div className="btn" style={flag?clickStyle:normalStyle} onClick={()=>{
                let oAudio = this.refAudio.current;
                oAudio.currentTime = 0;
                oAudio.play();
                this.setFlag();
                this.props.onShow(this.props.id);
            }}>
                {this.props.keyTrigger}
                <audio ref={this.refAudio} src={this.props.url}/>
            </div>
        );
    }
}

export default Btn;
