import React, { useState } from "react";
import Cases from "./components/Cases";
import Contacts from "./components/Contacts";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import Hero1 from "./components/Hero1";
import MobileNav from "./components/MobileNav";
import Services from "./components/Services";
import Survey from "./components/Survey";

function App() {
	const [activeMenu, setActiveMenu] = useState(false);
	const toggleHandler = () => {
		setActiveMenu(!activeMenu);
	};
	return (
		<div className="App">
			<Hamburger isActive={activeMenu} toggleMenu={toggleHandler} />
			<MobileNav isActive={activeMenu} toggleMenu={toggleHandler} />
			<Header />
			<Hero1 />
			<Services />
			<Cases />
			<Survey />
			<Contacts />
		</div>
	);
}

export default App;
