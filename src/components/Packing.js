import React, { useState, useEffect } from "react";

const Packing = ({
  packings,
  selectedPackingOption,
  setselectedPackingOption,
  handlePackagingOptionChange,
  salt,
  price
}) => {
  const [showMore, setShowMore] = useState(false);
  const [enableNoStock, setEnableNoStock] = useState(false);

  useState(() => {
    if (packings?.length) {
      setselectedPackingOption(packings[0]);
    }
  }, [packings]);


  useEffect( () => {
    if(!price) {
      setEnableNoStock(true);
    } else {
      setEnableNoStock(false);
    }
  }, [price])

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const divStyle = {
    flexDirection: showMore ? 'column' : 'row',
    gap: showMore ? '15px' : 'auto'
  };


  return (
    <>
      <table class="divide-y divide-gray-200" style={{ width: "650px" }}>
        <tbody>
          <tr>
            <td className="w-40">
              {" "}
              <label className="w-33">Packaging: </label>{" "}
            </td>
            <td className="w-80">
              {packings?.length ? (
                <div className="flex gap-8 justify-center items-center toMargin">
                  <div className="flex items-center space-x-4 mb-5 w-35" style={divStyle}>
                    {packings
                      ?.slice(0, showMore ? packings.length : 2)
                      .map((item, index) => (
                        <div key={index}>
                          <input
                            type="radio"
                            id={`${item}-${salt}`}
                            name="radiogroup"
                            value={item}
                            checked={selectedPackingOption === item}
                            onChange={handlePackagingOptionChange}
                            className="hidden"
                          />
                          <label
                            htmlFor={`${item}-${salt}`}
                            className={`cursor-pointer px-4 py-2 rounded-lg border transition duration-300 ease-in-out hover:bg-gray-200
                    ${
                      selectedPackingOption === item
                      ? (enableNoStock) ? "noStock" : "border-blue-900"
                        : "border-gray-200"
                    } bg-white`}
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </td>

            <td className="w-20">
              {packings?.length > 2 && !showMore && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleShowMore}
                  style={{ marginTop: "-15px" }}
                >
                  More
                </button>
              )}
              {packings?.length > 2 && showMore && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleShowMore}
                  style={{ marginTop: "-15px" }}
                >
                  Hide
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Packing;
