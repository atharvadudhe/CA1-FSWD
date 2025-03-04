import React from "react";
import ServiceCard from "./components/ServiceCard";

const App = () => {
  const services = [
    {title: "Web Development", description: "We will provide you with the interactive and a 3D Web Site, which will be optimsed for the SEO!"},
    {title: "Web Hosting", description: "We will also provide the facility to deploy and maintain your project!"}
  ]
  return(
    <div>
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </div>
  )
}

export default App;