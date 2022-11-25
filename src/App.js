// imports
import Header from './components/Header';
import Search from './components/Search';
import JobListing from './components/JobListing';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

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
        <Header />
        <main>
            <Search />
            <ul className="JobListings">
                {jobPost}
            </ul>
            <Pagination />
        </main>
        <Footer />
    </div>
  );
}

export default App;
