import { Card } from './components/Card';

function App() {
  // const arr = [10,9,3,40,50];
  // const arr2 = [
  //   {
  //     user:'Steve',
  //     age : 50,
  //   },
  //   {
  //     user:'Bill',
  //     age:60,
  //   },
  //   {
  //     user:'Elon',
  //     age:45,
  //   },
  // ];
  // arr2.map(function(elem){
  //   console.log(elem.age);
  // });
  
  const jobOpenings = [
    {
        "brandLogo": "https://static.vecteezy.com/system/resources/previews/022/424/485/original/meta-logo-editorial-logo-free-vector.jpg",
        "companyName": "Meta",
        "datePosted": "5 days ago",
        "position": "Software Engineer",
        "tag": "Full Time",
        "tag2": "Junior Level",
        "pay": 40,
        "location": "Dhaka, Bangladesh"
    },
    {
        "brandLogo": "https://tse3.mm.bing.net/th/id/OIP.YKFZjzosPzcUtBNHe9cAdAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        "companyName": "Amazon",
        "datePosted": "4 weeks ago",
        "position": "Cloud Solutions Architect",
        "tag": "Full Time",
        "tag2": "Senior Level",
        "pay": 70,
        "location": "Dhaka, Bangladesh"
    },
    {
        "brandLogo": "https://th.bing.com/th/id/R.2daa9423aaf624990eabf5bc5452dbd4?rik=24XvlZdo7H0hFQ&riu=http%3a%2f%2fsearchengineland.com%2ffigz%2fwp-content%2fseloads%2f2015%2f12%2fgoogle-amp-fast-speed-travel-ss-1920.jpg&ehk=Cv2SH3NafTzQ7OIM8u5Xt2tQb2WPid62XjfInAwYxcY%3d&risl=&pid=ImgRaw&r=0",
        "companyName": "Google",
        "datePosted": "2 weeks ago",
        "position": "Data Scientist",
        "tag": "Part Time",
        "tag2": "Junior Level",
        "pay": 35,
        "location": "Mumbai, India"
    },
    {
        "brandLogo": "https://tse1.mm.bing.net/th/id/OIP.3qsMnUTHk9Zs8dA5meZsSwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        "companyName": "Apple",
        "datePosted": "1 week ago",
        "position": "UX Designer",
        "tag": "Full Time",
        "tag2": "Senior Level",
        "pay": 55,
        "location": "Barisal, Bangladesh"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Flogopedia%2Fimages%2Fb%2Fb2%2FNetflixIcon2016.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F2000%3Fcb%3D20160620223003&f=1&nofb=1&ipt=242eea1870a507ff2c42f46a7b85a3af9ff91d22faea8de3165aed8bd181b1b4",
        "companyName": "Netflix",
        "datePosted": "3 weeks ago",
        "position": "Content Developer",
        "tag": "Full Time",
        "tag2": "Mid Level",
        "pay": 50,
        "location": "Khulna, Bangladesh"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F028%2F339%2F965%2Foriginal%2Fmicrosoft-icon-logo-symbol-free-png.png&f=1&nofb=1&ipt=b934b6bbe1f1f4f6b845ea416f34f2cf5b84063da3089ccbdf1bd4022b890c94",
        "companyName": "Microsoft",
        "datePosted": "2 days ago",
        "position": "Systems Analyst",
        "tag": "Part Time",
        "tag2": "Junior Level",
        "pay": 45,
        "location": "Cumilla, Bangladesh"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.adaminsights.com%2Fwp-content%2Fuploads%2F2024%2F09%2FIBM-logo-1967-1024x683.jpg&f=1&nofb=1&ipt=d99c90efe68b7dc48eb053a3ab1916e1dffdcd62fcdc3925ce25493084a43299",
        "companyName": "IBM",
        "datePosted": "1 month ago",
        "position": "Cloud Engineer",
        "tag": "Full Time",
        "tag2": "Senior Level",
        "pay": 75,
        "location": "Sylhet, Bangladesh"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FOracle-Symbol.png&f=1&nofb=1&ipt=ea514ae217f3459966c86c07b658dc4928166e16cd9f8c17f7a6fa15f95ebc85",
        "companyName": "Oracle",
        "datePosted": "3 weeks ago",
        "position": "Database Administrator",
        "tag": "Part Time",
        "tag2": "Mid Level",
        "pay": 60,
        "location": "Mumbai, India"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F62965ad62be59dc55430cac4.png&f=1&nofb=1&ipt=5fb9be8ae402216bd2576f94c34dd2906c04b365cc24281cbdff5ea534f34c17",
        "companyName": "Salesforce",
        "datePosted": "4 days ago",
        "position": "Technical Consultant",
        "tag": "Full Time",
        "tag2": "Junior Level",
        "pay": 48,
        "location": "Dhaka, Bangladesh"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fspotify%2Flogo-spotify-icon-4096.png&f=1&nofb=1&ipt=13095966fff4ba4a9fbf9a2fba3ea89200a9838d1228883774587b6c96ba1967",
        "companyName": "Spotify",
        "datePosted": "5 weeks ago",
        "position": "Machine Learning Engineer",
        "tag": "Full Time",
        "tag2": "Senior Level",
        "pay": 80,
        "location": "Mumbai, India"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F028%2F339%2F965%2Foriginal%2Fmicrosoft-icon-logo-symbol-free-png.png&f=1&nofb=1&ipt=b934b6bbe1f1f4f6b845ea416f34f2cf5b84063da3089ccbdf1bd4022b890c94",
        "companyName": "Microsoft",
        "datePosted": "2 days ago",
        "position": "Systems Analyst",
        "tag": "Part Time",
        "tag2": "Junior Level",
        "pay": 45,
        "location": "Sydney, Australia"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.adaminsights.com%2Fwp-content%2Fuploads%2F2024%2F09%2FIBM-logo-1967-1024x683.jpg&f=1&nofb=1&ipt=d99c90efe68b7dc48eb053a3ab1916e1dffdcd62fcdc3925ce25493084a43299",
        "companyName": "IBM",
        "datePosted": "1 month ago",
        "position": "Cloud Engineer",
        "tag": "Full Time",
        "tag2": "Senior Level",
        "pay": 75,
        "location": "London, UK"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FOracle-Symbol.png&f=1&nofb=1&ipt=ea514ae217f3459966c86c07b658dc4928166e16cd9f8c17f7a6fa15f95ebc85",
        "companyName": "Oracle",
        "datePosted": "3 weeks ago",
        "position": "Database Administrator",
        "tag": "Part Time",
        "tag2": "Mid Level",
        "pay": 60,
        "location": "Singapore"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F62965ad62be59dc55430cac4.png&f=1&nofb=1&ipt=5fb9be8ae402216bd2576f94c34dd2906c04b365cc24281cbdff5ea534f34c17",
        "companyName": "Salesforce",
        "datePosted": "4 days ago",
        "position": "Technical Consultant",
        "tag": "Full Time",
        "tag2": "Junior Level",
        "pay": 48,
        "location": "Mumbai, India"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fspotify%2Flogo-spotify-icon-4096.png&f=1&nofb=1&ipt=13095966fff4ba4a9fbf9a2fba3ea89200a9838d1228883774587b6c96ba1967",
        "companyName": "Spotify",
        "datePosted": "5 weeks ago",
        "position": "Machine Learning Engineer",
        "tag": "Full Time",
        "tag2": "Senior Level",
        "pay": 80,
        "location": "Dublin, Ireland"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FTwitter-Emblem.png&f=1&nofb=1&ipt=f13d0aa3a9e42c7f656019f1ef7b6cce5bcfa44a1786b93b516d3da806bff3be",
        "companyName": "Twitter",
        "datePosted": "2 weeks ago",
        "position": "Frontend Developer",
        "tag": "Full Time",
        "tag2": "Junior Level",
        "pay": 42,
        "location": "San Francisco, USA"
    },
    {
        "brandLogo": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-intel-logologobrand-logoiconslogos-251519939644r68ft.png&f=1&nofb=1&ipt=dd0ab87422bcc10b958ef5be77ddd465117be2a245b8abbae8307991ecdfaa08",
        "companyName": "Intel",
        "datePosted": "3 weeks ago",
        "position": "Hardware Engineer",
        "tag": "Full Time",
        "tag2": "Senior Level",
        "pay": 68,
        "location": "Beijing, China"
    },
]

  return (
    <>
     <div className="parent">
        {/* {arr.map(function(elem){
          return <h1>{elem}</h1> 
        })} */}

        {
          jobOpenings.map(function(elem,idx){         
            return <div key={idx}>
              <Card  company={elem.companyName} date={elem.datePosted} position = {elem.position} tag={elem.tag} tag2={elem.tag2} pay={elem.pay} location={elem.location} logo={elem.brandLogo}></Card>
            </div>
          })
        }
     </div>
     
    </>
  )
}

export default App
