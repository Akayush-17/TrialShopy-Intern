import React, { useState } from 'react';
import '../App.css';
import UploadIcon from "../Vector.png"

const MainVerification = ({ initialValues = {} }) => {
	const [aadharNumber, setAadharNumber] = useState(
		initialValues.aadharNumber || ''
	);
	const [panNumber, setPanNumber] = useState(initialValues.panNumber || '');

	const [GstinNumber, setGstinNumber] = useState(
		initialValues.GstinNumber || ''
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here, you can save the form data to the database
		// You can make an API call or use your preferred database integration

		// Example API call using fetch
		const formData = {
			aadharNumber,
			panNumber,
			GstinNumber,
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
		<div className="flex flex-col items-center p-0 gap-30 absolute w-[360px] sm:w-[1200px] sm:h-[562px] sm:left-[120px] top-[151.2px] ">
		   <div className="flex flex-row items-center gap-0 p-5 w-[360px] h-[45px] sm:w-[720px] sm:h-[90px] mb-16">
               <div className="flex flex-col items-center p-0 gap-10 w-[200px] h-[90px]">
                 <div className="flex flex-col justify-center items-center p-5 sm:p-10 gap-10 h-[25px] w-[25px] sm:w-[50px] sm:h-[50px] rounded-[60px] sm:rounded-[120px] bg-gradient-to-br from-gray-400 to-gray-900">
                   1
                 </div>
                 <text className="sm:h-[30px] sm:font-poppins  sm:text-base leading-6 text-sm font-semibold text-gray-800">Basic Info</text>
               </div>
               <div className="sm:h-0 mt-[-40px] sm:mt-0 h-0 w-[50px] sm:border-[1px] border border-gray-900"></div>
               <div className="flex flex-col items-center p-0 gap-10 w-[200px] h-[90px]">
                 <div className="flex flex-col justify-center items-center p-5 sm:p-10 gap-10 h-[25px] w-[25px] sm:w-[50px] sm:h-[50px] rounded-[60px] sm:rounded-[120px] bg-gradient-to-br from-gray-400 to-gray-900">
                   2
                 </div>
                 <text className="sm:h-[30px] sm:font-poppins sm:text-base leading-6 text-sm font-semibold text-gray-800">Business Info</text>
               </div>
               <div className="sm:h-0 h-0 mt-[-40px] sm:mt-0 w-[50px] border border-gray-900"></div>
               <div className="flex flex-col items-center p-0 gap-10 w-[200px] h-[90px]">
                 <div className="flex flex-col justify-center items-center p-5 sm:p-10 gap-10 h-[25px] w-[25px] sm:w-[50px] sm:h-[50px] rounded-[60px] sm:rounded-[120px] bg-gradient-to-br from-gray-400 to-gray-900">
                   3
                 </div>
                 <text className="sm:h-[30px] sm:font-poppins sm:text-base leading-6 text-sm font-semibold text-gray-800">Verification</text>
               </div>
            </div>

			<div className="flex flex-col items-center pt-3 sm:p-0 sm:gap-[20px] w-[360px] sm:w-[676px] h-[274px] sm:top-[120px] sm:left-[262px] mt-2 mb-3">
				<form onSubmit={handleSubmit}>
					<div className="sm:flex sm:flex-row items-start lg:gap-30 p-0 w-1200 h-78 flex flex-col">
						<label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
							<text className=" text">Enter Aadhar or VID:</text>
							<input
								className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
								type="text"
								placeholder="Enter Name"
								value={aadharNumber}
								onChange={(e) => setAadharNumber(e.target.value)}
							/>
						</label>
						<br />

						<div className="flex flex-col justify-center items-start p-0 gap-[10px] w-[296px] h-[74px] sm:ml-10">
							<text>*Upload your Aadhar as a single file</text>
							<div className="flex flex-row items-center p-0 gap-[10px] w-[293px] h-[40px]">
								<button className="flex flex-row justify-center items-center mx-auto px-8 py-2 pl-6 space-x-1 h-10  w-[131px] bg-gradient-to-r from-primary to-secondary">
									<img
										className="w-[16px] h-[16px] top-4 left-4  rounded-sm"
										src={UploadIcon} alt=""></img>
									<text className="w-[39px] h-[24px] font-poppins font-normal text-base leading-6">UPLOAD</text>
								</button>
								<text className="w-[152px] h-[24px] font-poppins font-normal text-gray-400 text-sm leading-6">
									Max File Size 20MB
								</text>
							</div>
						</div>
					</div>
					<br />
					<div className="sm:flex sm:flex-row items-start gap-30 p-0 w-1200 h-78 flex flex-col">
						<label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
							<text className=" text">Enter PAN:</text>
							<input
								className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
								type="text"
								placeholder="430023"
								value={panNumber}
								onChange={(e) => setPanNumber(e.target.value)}
							/>
						</label>
						<br />

						<div className="flex flex-col justify-center items-start p-0 gap-[10px] w-[296px] h-[74px] sm:ml-10">
							<text>*Upload your PAN as a single file</text>
							<div className="flex flex-row  items-center p-0 gap-[10px] w-[293px] h-[40px]">
								<button className="flex flex-row justify-center items-center mx-auto px-8 py-2 pl-6 space-x-1 h-10 w-[131px] bg-gradient-to-r from-primary to-secondary">
									<img
										className="w-[16px] h-[16px] top-4 left-4 rounded-sm"
										src={UploadIcon} alt=""></img>
									<text className="w-[39px] h-[24px] font-poppins font-normal text-base leading-6">UPLOAD</text>
								</button>
								<text className="w-[152px] h-[24px] font-poppins font-normal text-gray-400 text-sm leading-6">
									Max File Size 20MB
								</text>
							</div>
						</div>
					</div>
					<br />
					<div className="sm:flex sm:flex-row items-start gap-30 p-0 w-80 sm:w-1200 h-78 flex flex-col">
						<label className="flex flex-col items-start p-0 gap-[10px] w-[340px] h-[78px] pl-[10px]">
							<text className=" text">Enter GSTIN:</text>
							<input
								className="box-border flex flex-row justify-center items-center p-2 gap-2 h-44 bg-white border-b border-gray-500 text-gray-700 w-[360px]"
								type="text"
								placeholder="430023"
								value={GstinNumber}
								onChange={(e) => setGstinNumber(e.target.value)}
							/>
						</label>
						<br />

						<div className="flex flex-col justify-center items-start p-0 gap-[10px] w-[296px] h-[74px] sm:ml-10">
							<text>*Upload your GSTIN as a single file</text>
							<div className="flex flex-row items-center p-0 gap-[10px] w-[293px] h-[40px]">
								<button className="flex flex-row justify-center items-center mx-auto px-8 py-2 pl-6 space-x-1 h-10 w-[131px] text-center bg-gradient-to-r from-primary to-secondary ">
									<img
										className="w-[16px] h-[16px] top-4 left-4 rounded-sm"
										src={UploadIcon} alt=""></img>
									<text className="w-[39px] h-[24px] font-poppins font-normal text-base leading-6">UPLOAD</text>
								</button>
								<text className="w-[152px] h-[24px] font-poppins font-normal text-gray-400 text-sm leading-6">
									Max File Size 20MB
								</text>
							</div>
						</div>
					</div>
				</form>
			</div>
			<button
				className="sm:flex mt-[360px] sm:mt-2 sm:flex-row flex flex-col justify-center items-center p-2 gap-[10px] w-[109px] h-[40px] bg-gradient-to-r from-primary to-secondary "
				type="submit">
				<text className="w-[39px] h-[24px] font-poppins font-normal text-base leading-6 text-black text-center">SUBMIT</text>
			</button>
		</div>
	);
};
export default MainVerification;
