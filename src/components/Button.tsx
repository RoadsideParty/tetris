import './Button.scss'
interface IProps {
    type: 'up' | 'down' | 'left' | 'right' | 'space';
}
function Button(props: IProps) {
    const { type } = props
    function renderButton() {
        return (<div className={`button ${type}`}>{type === 'space' ? 'space' : ''}</div>)
    }
    return (
        <>
            {renderButton()}
        </>
    )
}

export default Button
