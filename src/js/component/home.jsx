import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setColor ] = useState("");
	return (<div>		
		<div className="Traffic-handle"></div>
		<div className = "Traffic-light">
          <div 
		    onClick={() => setColor("red")}
		    className ={"Light red" + (selectedColor === "red" ? " glow" : "")}>

		  		</div>
		  		<div 
		    	onClick={() => setColor("yellow")}
				className = {"Light yellow"+ (selectedColor === "yellow" ? " glow" : "")}>

				</div>
		  		<div 
		       	onClick={() => setColor("green")}
				className = {"Light green"+ (selectedColor === "green" ? " glow" : "")}>

				</div>
			
		</div>
		 </div>      
	);
};


export default Home;
