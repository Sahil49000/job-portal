import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

// const skills = ["Html", "CSS", "Javascript", "Reactjs"];
const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="data:image/jpeg;base64,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"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length != 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>



        {isResume ? (
          <a
            href={user?.profile?.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {user?.profile?.resumeOriginalName || "View Resume"}
          </a>
        ) : (
          <span>NA</span>
        )}


        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied Job Table*/}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
