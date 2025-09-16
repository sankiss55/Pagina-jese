import './../../styles/FeatureItem.css'
const FeatureItem = ({ title, icon }) => {
    return (
        <div className="feature-item"  data-aos="zoom-out">
            <p>{title}</p>
            {icon}
        </div>
    );
}
export default FeatureItem;