import React, { useState } from 'react';
// import '../styles/basicInfo.css';

const MainBasicInfo = ({ initialValues = {} }) => {
	const [fullName, setFullName] = useState(initialValues.fullName || '');
	const [middleName, setMiddleName] = useState(initialValues.middleName || '');
	const [lastName, setLastName] = useState(initialValues.lastName || '');
	const [email, setEmail] = useState(initialValues.email || '');
	const [phoneNumber, setPhoneNumber] = useState(
		initialValues.phoneNumber || ''
	);
	const [alternatePhoneNumber, setAlternatePhoneNumber] = useState(
		initialValues.alternatePhoneNumber || ''
	);
	const [pincode, setPincode] = useState(initialValues.pincode || '');
	const [address1, setAddress1] = useState(initialValues.address1 || '');
	const [address2, setAddress2] = useState(initialValues.address2 || '');
	const [country, setCountry] = useState(initialValues.country || '');
	const [state, setState] = useState(initialValues.state || '');
	const [district, setDistrict] = useState(initialValues.district || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here, you can save the form data to the database
		// You can make an API call or use your preferred database integration

		// Example API call using fetch
		const formData = {
			fullName,
			middleName,
			lastName,
			email,
			phoneNumber,
			alternatePhoneNumber,
			pincode,
			address1,
			address2,
			country,
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
		<div className="flex flex-col items-center p-0 gap-30 absolute w-[360px] sm:w-[1200px] sm:h-[562px] sm:left-[150px]  top-[151.2px]">
			<div className="flex flex-row justify-around items-center gap-0  w-[420px] h-[45px] sm:w-[720px] sm:h-[90px] pr-5 ml-[60px] mb-5">
				<div className="flex flex-col items-center p-0 gap-4 w-[200px] h-[90px]">
					<div className="flex flex-col justify-center items-center p-10 gap-10 w-[50px] h-[50px] rounded-full bg-gradient-to-br from-gray-400 to-gray-900">
						1
					</div>
					<text className="w-[99px] sm:h-[30px] sm:font-poppins font-normal sm:text-base leading-6 sm:font-semibold text-center text-gray-800">
						Basic Info
					</text>
				</div>
				<div className=" mt-[-10px] sm:mt-0 w-20  border border-gray-300"></div>
				<div className="flex flex-col items-center p-0 gap-4 w-[200px] h-[90px]">
					<div className="flex flex-col justify-center items-center p-10 gap-10 w-[50px] h-[50px] rounded-full bg-gray-300">2</div>
					<text className="sm:h-[30px] sm:font-poppins font-normal sm:text-base leading-6 w-[129px] sm:font-normal text-center text-gray-400">
						Business Info
					</text>
				</div>
				<div className="sm:h-0 mt-[-10px] sm:mt-0 w-20 sm:border-[1px] border border-gray-300"></div>
				<div className="flex flex-col items-center p-0 gap-4 w-[200px] h-[90px]">
					<div className="flex flex-col justify-center items-center p-10 gap-10 w-[50px] h-[50px] rounded-full bg-gray-300">3</div>
					<text className="sm:h-[30px] sm:font-poppins font-normal sm:text-base leading-6 w-[129px] sm:font-normal text-center text-gray-400">
						Verification
					</text>
				</div>
			</div>
			<div className="flex flex-col mr-10 sm:flex-wrap items-center justify-center font-poppins p-0 gap-[20px] sm:w-[1200px] ml-8  sm:h-[372px] sm:ml-[100px] mt-12 mb-3">
  <form onSubmit={handleSubmit}>
    <div className="sm:flex sm:flex-row m-4 gap-30">
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Full Name:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            value={fullName}
            placeholder="Enter Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Middle Name:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            placeholder="Enter Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Last Name:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            value={lastName}
            placeholder="Enter Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
    </div>

    <div className="sm:flex sm:flex-row m-4 gap-30">
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Email:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="email"
            placeholder="user@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Phone Number:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="tel"
            placeholder="(304) 555-0108"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Alternate Phone Number:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="tel"
            placeholder="(304) 555-0108"
            value={alternatePhoneNumber}
            onChange={(e) => setAlternatePhoneNumber(e.target.value)}
          />
        </label>
      </div>
    </div>

    <div className="sm:flex sm:flex-row m-4 gap-30">
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Pincode:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            placeholder="430023"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Address 1:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            placeholder="(304) 555-0108"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Address 2:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            placeholder="(304) 555-0108"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </label>
      </div>
    </div>

    <div className="sm:flex sm:flex-row m-4 gap-30">
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">Country:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            placeholder="India"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">State:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
            type="text"
            placeholder="Punjab"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
      </div>
      <div className="sm:w-[360px] sm:mr-10">
        <label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
          <text className="text">District:</text>
          <input
            className="box-border flex flex-row justify-center items-center p-2 gap-10 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
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

			<button className="sm:flex ml-8  mb-5 mt-[20px] sm:mt-4 sm:flex-row flex flex-col justify-center items-center p-2 gap-[10px] w-[109px] h-[40px] bg-gradient-to-r from-primary to-secondary" type="submit">
				<text className="w-[39px] h-[24px] font-poppins font-normal text-base leading-6 ">Next</text>
			</button>
		</div>
	);
};

export default MainBasicInfo;
