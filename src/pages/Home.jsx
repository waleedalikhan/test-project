import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileComponent from "../components/ProfileComponent";
import { mainApi } from "../apis";

const Home = () => {
  let [profiles, setProfiles] = useState([]);
  let http = axios;

  useEffect(() => {
    const getProfiles = async () => {
      let res = await http.get(mainApi);

      setProfiles(res.data);
    };

    getProfiles();
  }, []);

  if (profiles) {
    return (
      <>
        {profiles.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <ProfileComponent
                img={user.profile_picture}
                username={user.username}
                firstName={user.profile.firstName}
                lastName={user.profile.lastName}
                knowIps={user.knownIps}
              />
            </React.Fragment>
          );
        })}
      </>
    );
  } else return null;
};

export default Home;
