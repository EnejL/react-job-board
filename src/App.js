// importing components
import './components/JobListing';

// importing assets
import './styles/App.css';
import logo from './logo.svg';
import JobListing from "./components/JobListing";
import jobs from "./data"

function App() {
    const jobPost = jobs.map(jobItem => {
        return (
            <JobListing
                key={jobItem.id}
                jobTitle={jobItem.jobTitle}
                jobLink={jobItem.jobLink}
                companyName={jobItem.companyName}
                jobLocation={jobItem.jobLocation}
                datePosted={jobItem.datePosted}
            />
        )
    })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Header
        </p>
      </header>
        <main>
            <ul className="JobListings">
                {jobPost}
            </ul>
        </main>
    </div>
  );
}

export default App;
