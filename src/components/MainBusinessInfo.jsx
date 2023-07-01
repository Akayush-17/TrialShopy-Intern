import React, { useState } from 'react';
// import '../styles/basicInfo.css';

const MainBusinessInfo = ({ initialValues = {} }) => {
	const [storeName, setStoreName] = useState(initialValues.storeName || '');
	const [storeDescription, setStoreDescription] = useState(
		initialValues.storeDescription || ''
	);

	const [pincode, setPincode] = useState(initialValues.pincode || '');
	const [address1, setAddress1] = useState(initialValues.address1 || '');
	const [address2, setAddress2] = useState(initialValues.address2 || '');
	const [pickupPincode, setPickupPincode] = useState(
		initialValues.pickupPincode || ''
	);
	const [pickupAddress, setPickupAddress] = useState(
		initialValues.pickupAddress || ''
	);
	const [storeGSTIN, setstoreGSTIN] = useState(initialValues.storeGSTIN || '');
	const [state, setState] = useState(initialValues.state || '');
	const [district, setDistrict] = useState(initialValues.district || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here, you can save the form data to the database
		// You can make an API call or use your preferred database integration

		// Example API call using fetch
		const formData = {
			storeName,
			storeDescription,
			pincode,
			address1,
			address2,
			pickupPincode,
			pickupAddress,
			storeGSTIN,
			state,
			district,
		};

		fetch('/api/saveFormData', {
			method: 'POST',
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Form data saved successfully:', data);
				// Handle success, e.g., show a success message or redirect
			})
			.catch((error) => {
				console.error('Error saving form data:', error);
				// Handle error, e.g., show an error message
			});
	};
	return (
		<div className="flex flex-col items-center p-0 gap-30 absolute w-[380px] sm:w-[1200px] sm:h-[562px] sm:left-[150px] top-[151.2px] ">
			<div className="flex flex-row justify-around items-center gap-0  w-[380px] h-[45px] sm:w-[720px] sm:h-[90px]  mb-5">
				<div className="box">
					<div className="number bg-gradient-to-br from-gray-400 to-gray-900">
						1
					</div>
					<text className="w-[99px] sm:box-text text-center sm:font-semibold text-gray-800">
						Basic Info
					</text>
				</div>
				<div className="sm:h-0 mt-[-40px] sm:mt-0 w-20 sm:border-[1px] border border-gray-900"></div>
				<div className="box">
					<div className="number bg-gradient-to-br from-gray-400 to-gray-900">
						2
					</div>
					<text className="w-[134px] sm:box-text text-center sm:font-semibold text-gray-800">
						Business Info
					</text>
				</div>
				<div className="sm:h-0 mt-[-40px] sm:mt-0 w-20 sm:border-[1px] border border-gray-300"></div>
				<div className="box">
					<div className="number bg-gray-300">3</div>
					<text className="sm:box-text w-[129px] text-sm text-center sm:font-normal text-gray-400">
						Verification
					</text>
				</div>
			</div>
			<div className="flex flex-col sm:flex-wrap items-center font-poppins p-0 gap-[20px] w-[380px] sm:w-[1200px] sm:h-[372px] mt-2 mb-3">
	<form onSubmit={handleSubmit}>
		<div className="sm:flex sm:flex-row gap-30">
			<div className="sm:w-[360px] sm:mr-10 ">
				<label className="labels">
					<text className=" text">Store Name:</text>
					<input
						className="input w-full"
						type="text"
						placeholder="Enter Name"
						value={storeName}
						onChange={(e) => setStoreName(e.target.value)}
					/>
				</label>
			</div>
			<div className="sm:w-[790px]">
				<label className="labels">
					<text className=" text">Store Description:</text>
					<input
						className="input w-full sm:w-[790px]"
						type="text"
						placeholder="Enter Description"
						value={storeDescription}
						onChange={(e) => setStoreDescription(e.target.value)}
					/>
				</label>
			</div>
		</div>
		<br />
		<div className="sm:flex sm:flex-row gap-30">
			<div className="sm:w-[360px] sm:mr-10">
				<label className="labels">
					<text className=" text">Pincode:</text>
					<input
						className="input w-full"
						type="text"
						placeholder="430023"
						value={pincode}
						onChange={(e) => setPincode(e.target.value)}
					/>
				</label>
			</div>
			<div className="sm:w-[360px] sm:mr-10">
				<label className="labels">
					<text className=" text">Address 1:</text>
					<input
						className="input w-full"
						type="text"
						placeholder="(304) 555-0108"
						value={address1}
						onChange={(e) => setAddress1(e.target.value)}
					/>
				</label>
			</div>
			<div className="sm:w-[410px]">
				<label className="labels">
					<text className=" text">Address 2</text>
					<input
						className="input w-full"
						type="text"
						placeholder="(304) 555-0108"
						value={address2}
						onChange={(e) => setAddress2(e.target.value)}
					/>
				</label>
			</div>
		</div>
		<br />
		<div className="sm:flex sm:flex-row gap-30">
			<div className="sm:w-[340px] sm:mr-5">
				<label className="labels">
					<text className=" text">Pickup Pincode:</text>
					<input
						className="input w-full"
						type="text"
						placeholder="430023"
						value={pickupPincode}
						onChange={(e) => setPickupPincode(e.target.value)}
					/>
				</label>
			</div>
			<div className="sm:w-[790px] sm:ml-10">
				<label className="labels">
					<text className=" text">Pickup Address:</text>
					<input
						className="input w-full sm:w-[790px]"
						type="text"
						placeholder="(304) 555-0108"
						value={pickupAddress}
						onChange={(e) => setPickupAddress(e.target.value)}
					/>
				</label>
			</div>
		</div>
		<br />
		<div className="sm:flex sm:flex-row gap-30">
			<div className="sm:w-[360px] mr-10">
				<label className="labels">
					<text className=" text">Store GSTIN:</text>
					<input
						className="input w-full"
						type="text"
						placeholder="Enter GSTIN"
						value={storeGSTIN}
						onChange={(e) => setstoreGSTIN(e.target.value)}
					/>
				</label>
			</div>
			<div className="sm:w-[360px] mr-10">
				<label className="labels">
					<text className=" text">State:</text>
					<input
						className="input w-full"
						type="text"
						placeholder="Punjab"
						value={state}
						onChange={(e) => setState(e.target.value)}
					/>
				</label>
			</div>
			<div className="sm:w-[410px]">
				<label className="labels">
					<text className=" text">District</text>
					<input
						className="input w-full"
						type="text"
						placeholder="Enter Name"
						value={district}
						onChange={(e) => setDistrict(e.target.value)}
					/>
				</label>
			</div>
		</div>
	</form>
</div>


			<button className="sm:flex  mb-5 mt-[20px] sm:mt-4 sm:flex-row flex flex-col justify-center items-center p-2 gap-[10px] w-[109px] h-[40px] bg-gradient-to-r from-primary to-secondary " type="submit">
				<text className="button-text">Next </text>
			</button>
		</div>
	);
};
export default MainBusinessInfo;
