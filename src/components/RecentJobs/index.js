/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../../services/jobs";
// import jobs from "./../../assets/data/jobs.json";

const RecentJobs = () => {
  let [jobs, setJobs] = useState([]);

  const getData = async () => {
    jobs = await getJobs();
    setJobs(jobs);
    console.log(jobs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>
        {jobs.map((job) => (
          <div key={job.id} className="row item-blocks-connected">
            <div className="col-xs-12">
              <a className="item-block" href="/">
                <header>
                  <img src={job.image} alt="" />
                  <div className="hgroup">
                    <h4>{job.title}</h4>
                    <h5>{job.company}</h5>
                  </div>
                  <div className="header-meta">
                    <span className="location">{job.location}</span>
                    <span className="label label-success">{job.type}</span>
                  </div>
                </header>
              </a>
            </div>
          </div>
        ))}

        <br />
        <br />
        <p className="text-center">
          <Link className="btn btn-info" to="/jobs">
            Browse all jobs
          </Link>
        </p>
      </div>
    </section>
  );
};
export default RecentJobs;
