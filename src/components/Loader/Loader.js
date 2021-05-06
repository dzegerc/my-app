import Loader from 'react-loader-spinner';

const LoaderStyle = () => {
    const style = { position: "fixed", top: "80%", left: "50%", transform: "translate(-50%, -50%)" };

    return (
        <Loader style={style}
    type="Oval"
    color="#e4b43c"
    height={80}
    widt={80}
    timeout={1000}
    />
    );
}

export default LoaderStyle