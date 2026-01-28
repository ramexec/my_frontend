import React from "react";
import ProjectTemplate from "../ProjectTemplate";
import ecommerceImage from "../../../assets/ecommerce.png";

export const ECommerce = () => {
  return (
    <ProjectTemplate
      title="MyCommerce"
      subtitle="E-Commerce Web Application"
      image={ecommerceImage}
      overview="MyCommerce is a full-featured e-commerce platform designed to provide a seamless online shopping experience. It includes product browsing, shopping cart functionality, secure checkout, and user account management."

      frontendTech={[
        "React",
        "JavaScript",
        "HTML5",
        "CSS",
      ]}

      backendTech={[
        "Spring Boot",
        "MySQL",
      ]}

      tools={[
        "Git & GitHub",
        "JWT Authentication",
        "Axios",
      ]}

      role="Full-Stack Developer"
      type="Personal Project / Portfolio"
      status="In Progress"

      highlights={[
        "RESTful API architecture for scalable backend services",
        "JWT-based authentication for secure user sessions",
        "Responsive UI for cross-device compatibility",
      ]}

      githubLink="https://github.com/ramexec/ecommerce_v1"
      liveLink="https://ramexec.github.io/ecommerce_v1/#/"
    />
  );
};

