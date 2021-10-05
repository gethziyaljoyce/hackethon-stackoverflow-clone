import axios from "axios"
import React from "react";
import StyledHeader from "./HeaderCommon";

export default function Tag() {

    const [tags, setTags] = React.useState([]);
    const getTags = async () => {
        const data = await axios.get("https://gethziyaljoyce.herokuapp.com/tags");
        setTags(data);
    }

    React.useEffect(() => getTags());
    return (
        <>
            <div>
                <StyledHeader>Frequently used Tags</StyledHeader>
                {tags.map((element, index) => {
                    return (
                        <>
                            <div key={index} className="comment">
                                <p>tag :{element.tag}</p>

                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}