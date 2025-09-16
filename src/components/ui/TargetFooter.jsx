
const TargetFooter = ({title, ...components}) => {
    let componentList =Object.keys(components).map((key)=>{
        return (
            <li key={key}>{components[key]}</li>
        );
    });
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {componentList}
            </ul>
        </div>
    )
}
export default TargetFooter;