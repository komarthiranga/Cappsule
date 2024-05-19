import React, { useState, useEffect } from "react";
import Forms from "./Forms";
import Stength from "./Strength";
import Packing from "./Packing";

const SaltCard = ({ saltData, name }) => {
  const [selectedFormOption, setSelectedFormOption] = useState(null);
  const [selectedStrengthOption, setselectedStrengthOption] = useState(null);
  const [selectedPackingOption, setselectedPackingOption] = useState(null);
  const [forms, setForms] = useState();
  const [strengths, setStrengths] = useState();
  const [packings, setPackings] = useState();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    let formsData = [];
    let strengthsData = [];
    let packingData = [];

    for (let key in saltData) {
      formsData.push(key);
    }

    for (let strengthKey in saltData[formsData[0]]) {
      strengthsData.push(strengthKey);
    }
    for (let packingKey in saltData[formsData[0]][strengthsData[0]]) {
      packingData.push(packingKey);
    }

    setForms(formsData);
    setStrengths(strengthsData);
    setPackings(packingData);
  }, [saltData]);

  useEffect(() => {
    if (selectedFormOption) {
      let strengthsData = [];
      for (let strengthKey in saltData[selectedFormOption]) {
        strengthsData.push(strengthKey);
      }
      setStrengths(strengthsData);
    }
  }, [selectedFormOption]);

  useEffect(() => {
    if (selectedStrengthOption) {
      let packingData = [];
      for (let packingKey in saltData[selectedFormOption][
        selectedStrengthOption
      ]) {
        packingData.push(packingKey);
      }

      setPackings(packingData);
    }
  }, [selectedStrengthOption]);

  useEffect(() => {
    if (selectedFormOption && selectedStrengthOption && selectedPackingOption) {
      const bestPrice = getPrice(
        saltData[selectedFormOption][selectedStrengthOption][
          selectedPackingOption
        ]
      );
      setPrice(bestPrice);
      console.log(bestPrice);
    }
  }, [selectedPackingOption]);

  const getPrice = (data) => {
      let price = null;
      for(let key in data) {
        const maninItem = data[key];
        for(let key2 in maninItem) {
          let item = maninItem[key2];
          console.log('lllll', item);
          if(price && item?.selling_price && item?.selling_price < price) {
            price = item?.selling_price;
          } else {
            if(item?.selling_price) {
              price = item?.selling_price;
              console.log('RANGAAA', price);
            }
          }
  
        }
      }
      return !price ? 0 : price;
  }

  const handleFormOptionChange = (event) => {
    setSelectedFormOption(event.target.value);
  };

  const handleStrengthOptionChange = (event) => {
    setselectedStrengthOption(event.target.value);
  };

  const handlePackagingOptionChange = (event) => {
    setselectedPackingOption(event.target.value);
  };

  return (
    <div style={{ marginTop: "32px", marginTop: "32px" }}>
      <div
        className="max-w-mdbg-white shadow-md rounded-lg overflow-hidden flex flex-row"
        style={{ width: "1200px" }}
      >
        <div className="px-4 py-2 flex flex-col items-center ">
          {forms && forms.length && (
            <Forms
              salt={name}
              selectedFormOption={selectedFormOption}
              handleFormOptionChange={handleFormOptionChange}
              setSelectedFormOption={setSelectedFormOption}
              forms={forms}
              price={price}
            />
          )}
          {strengths && strengths.length && (
            <Stength
              salt={name}
              selectedStrengthOption={selectedStrengthOption}
              handleStrengthOptionChange={handleStrengthOptionChange}
              setselectedStrengthOption={setselectedStrengthOption}
              strengths={strengths}
              price={price}
            />
          )}
          {packings && packings.length && (
            <Packing
              salt={name}
              selectedPackingOption={selectedPackingOption}
              handlePackagingOptionChange={handlePackagingOptionChange}
              setselectedPackingOption={setselectedPackingOption}
              packings={packings}
              price={price}
            />
          )}
        </div>

        <div className="px-4 py-2 flex flex-col justify-center items-center" style={{width: '200px'}}>
          <div className="w-50">
            <h5 style={{ fontSize: "15px", fontWeight: "700" }}>{name}</h5>
          </div>
          <div className="w-50 justify-center items-center">
            <p style={{ alignItems: "center", fontSize: "12px" }}>
              {selectedFormOption} | {selectedStrengthOption} |{" "}
              {selectedPackingOption}{" "}
            </p>
          </div>
        </div>
        <div className="px-4 py-2 flex items-center justify-between bg-gray-100 font-bold text-3xl price">
          {price !== 0 && <h4 style={{ fontSize: "20px" }}>Form ${price}</h4> }
          {price === 0 && <div class="bg-white rounded-lg shadow-lg p-6">
          <p style={{fontSize: '12px', fontWeight: 300}}>No Stories selling this product near you</p>
</div>
}
        </div>
      </div>
    </div>
  );
};

export default SaltCard;
