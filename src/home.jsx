import React from "react";
function Home() {
    function startKYC() {
      const accessToken="Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6InRzNmhycSIsImhhc2giOiI2YTllZTY4YTMxZjA3NzgxOGUxODdiNzhhZGFmYTIwZWVhZjZiMDUzNzY2MjdlMjU1OWQ0Yzg2YTJkYjY2MjEyIiwiaWF0IjoxNjg4MDU2NDMyLCJleHAiOjE2ODgwNTY3MzIsImp0aSI6ImQ2OGVkOThlLWRkM2EtNDk5NC04YTBhLTA2OTQ5NmJjMjk0MiJ9.uC283ofOD5Ev0o4Uwb0BHURVdoXLi0K3mIq-oG1DmCIj_CZ-GxzqH5AB4bzDyzHJ5XfmXhLc7cX3cvvgnWcQ2hwZC6cpWCVVRu7PCxn8a-JNqkEwvhsGyKT8lYulVUyOBKL1fQ0K3gXeeZpc5HQVVh4yKAvQwsPn6C49-64SgyM";
      const workflowId="Liveness";
      const hyperKycConfig = new window.HyperKycConfig(accessToken, workflowId, "1234");
      const handler = (HyperKycResult) => {
        switch(HyperKycResult.status) {
          case "user_cancelled":
              // user cancelled
              alert("User Cancelled!")
          break;
          case "error":
            // failure
            alert("Error")
          break;
          case "auto_approved":
          case "auto_declined":
          case "needs_review":
            // workflow success
            alert("Workflow Success!")
          break;
          default:
            console.log("success")
            }
    }
    window.HyperKYCModule.launch(hyperKycConfig, handler);
      }
  return (
    <div>
<button onClick={startKYC}>
  Start KYC
</button>
    </div>
  );
}

export default Home;
