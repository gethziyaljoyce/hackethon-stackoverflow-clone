import axios from "axios"
import React from "react";
import StyledHeader from "./HeaderCommon";

export default function Company() {

    const [company, setCompany] = React.useState([]);

    const getCompanyDetails = async () => {
        const data = await axios.get("https://gethziyaljoyce.herokuapp.com/companies");
        setCompany(data);
    }

    React.useEffect(() => getCompanyDetails());

    return (
        <>
            <div>
                <StyledHeader> Recruiting Companies Detail</StyledHeader>
                {company.map((element, index) => {
                    return (
                        <>
                            <div key={index} className="comment">
                                <p>Name of the Company :{element.name}</p>
                                <p>Address : {element.address}</p>
                                <p>Description:{element.description}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}