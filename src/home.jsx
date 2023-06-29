import React from "react";
function Home() {
    function startKYC() {
      // const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6InRzNmhycSIsImhhc2giOiI2YTllZTY4YTMxZjA3NzgxOGUxODdiNzhhZGFmYTIwZWVhZjZiMDUzNzY2MjdlMjU1OWQ0Yzg2YTJkYjY2MjEyIiwiaWF0IjoxNjg0ODM3NzQ1LCJleHAiOjE2ODQ4MzgwNDUsImp0aSI6ImUxNzk4ZmQyLTYxYzEtNDUzZS05MzBmLTg0MjI1Mjg5MmYzZCJ9.d6SM-IkEtMl_4kknmGEWNtjjfrgf-xlrJCVytwcFC-zCPUVuaHx3EJt4FbhnTv8zPfC3NJenrXy3n4vctJjNi4YpfVOQsv6wGquB4mv-4ahJBCd6GAsIBsBmeuuoeqoUJRgSPi71lu_S_ofr5O0wp6U1yf5s7YlCFLYQKEZ9Qus"
      // const hyperKycConfig = new HyperKycConfig(
      //     accessToken,
      //     "Liveness",
      //     "1234"
      // );
      // HyperKYCModule.launch(hyperKycConfig, handler);
        window.HyperSnapSDK.init('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6InRzNmhycSIsImhhc2giOiI2YTllZTY4YTMxZjA3NzgxOGUxODdiNzhhZGFmYTIwZWVhZjZiMDUzNzY2MjdlMjU1OWQ0Yzg2YTJkYjY2MjEyIiwiaWF0IjoxNjg0ODM3NzQ1LCJleHAiOjE2ODQ4MzgwNDUsImp0aSI6ImUxNzk4ZmQyLTYxYzEtNDUzZS05MzBmLTg0MjI1Mjg5MmYzZCJ9.d6SM-IkEtMl_4kknmGEWNtjjfrgf-xlrJCVytwcFC-zCPUVuaHx3EJt4FbhnTv8zPfC3NJenrXy3n4vctJjNi4YpfVOQsv6wGquB4mv-4ahJBCd6GAsIBsBmeuuoeqoUJRgSPi71lu_S_ofr5O0wp6U1yf5s7YlCFLYQKEZ9Qus', window.HyperSnapParams.Region.AsiaPacific);
        window.HyperSnapSDK.startUserSession();
        const hvDocConfig = new window.HVDocConfig();
        hvDocConfig.setOCRDetails('https://vnm-docs.hyperverge.co/v2/nationalID',                                                                hvDocConfig.DocumentSide.FRONT, {}, {});
        hvDocConfig.setShouldShowInstructionPage(true);
       
        const callback = (HVError, HVResponse) => {
              if (HVError) {
                var para = document.createElement('p');
                var node = document.createTextNode(JSON.stringify(HVError));
                para.appendChild(node);
                var element = document.getElementById('div1');
                element.appendChild(para);
              } else {
                var para = document.createElement('p');
                var node = document.createTextNode(JSON.stringify(HVResponse));
                para.appendChild(node);
                var element = document.getElementById('div1');
                element.appendChild(para);
              }
        };
        window.HVDocsModule.start(hvDocConfig, callback);
      }
  return (
    <div>
<button onClick={startKYC}>
  Say Hello
</button>
    </div>
  );
}

export default Home;
