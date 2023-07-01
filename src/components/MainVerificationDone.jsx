export default function MainVerificationDone() {
	return (
	  <div className="flex flex-col items-center justify-center p-4 gap-4 absolute sm:w-full h-screen left-0 top-0">
		<div className="flex flex-col items-center">
		  <h1 className="max-w-lg p-4 text-2xl font-medium text-center text-black lg:block">
			THANK YOU FOR SUBMITTING YOUR PROFILE
		  </h1>
		  <h2 className="max-w-lg p-4 text-lg font-normal text-center text-black lg:block">
			We will review your Store details &amp; revert back to you in 2-3 days
		  </h2>
		 
		  <button className="flex justify-center items-center p-4 gap-2 w-48 h-10 bg-gradient-to-r from-primary to-secondary">
			<span className="text-base font-normal text-black">CHECK MY STATUS</span>
		  </button>
		</div>
	  </div>
	);
  }
  