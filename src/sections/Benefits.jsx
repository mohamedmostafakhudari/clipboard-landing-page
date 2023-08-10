import React from "react";
import Benefit from "../components/Benefit";
import imageComputer from "../assets/images/image-computer.png";
import imageDevices from "../assets/images/image-devices.png";
import Icon from "../components/Icon";
export default function Benefits() {
  return (
    <div className="[&>*]:py-24">
      <Benefit
        title="Keep track of your snippets"
        subtitle="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and IOS apps will help you organize everything."
      >
        <div className="flex flex-col gap-10 mt-12 md:flex-row">
          <img src={imageComputer} alt="" />
          <ul className="grid grid-cols-1 gap-10 text-center md:text-left [&>*]:space-y-2">
            <li>
              <h3 className="">Quick Search</h3>
              <p className="">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </li>
            <li>
              <h3>ICloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </li>
            <li>
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </li>
          </ul>
        </div>
      </Benefit>
      <Benefit
        title={"Access Clipboard anywhere"}
        subtitle={
          "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
        }
      >
        <div>
          <img src={imageDevices} alt="" />
        </div>
      </Benefit>
      <Benefit
        title={"Supercharge your workflow"}
        subtitle={"We've got the tools to boost your productivity."}
      >
        <div>
          <ul>
            <li>
              <Icon type={"blacklist"} />
              <h3>Create blacklists</h3>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </li>
            <li>
              <Icon type={"text"} />
              <h3>Plain text snippets</h3>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </li>
            <li>
              <Icon type={"preview"} />
              <h3>Sneak preview</h3>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </li>
          </ul>
        </div>
      </Benefit>
    </div>
  );
}
