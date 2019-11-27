import React from 'react';
import {RotateLoader} from "react-spinners";

const Spiner = () => {
        return (
            <div className="spiner">
                <RotateLoader
                    sizeUnit={"px"}
                    size={12}
                    margin={'2px'}
                    color={'#36d7b7'}
                />
            </div>
        )
};

export default Spiner;