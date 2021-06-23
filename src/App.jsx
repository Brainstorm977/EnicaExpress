import React, { useState } from "react";
import Cases from "./components/Cases";
import Solutions from "./components/Solutions";
import Contacts from "./components/Contacts";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
			<Hero />
			<Services />
			<Cases />
			<Survey />
			<Solutions />
			<Contacts />
		</div>
	);
}

export default App;