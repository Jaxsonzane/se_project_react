import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothingSection/ClothingSection";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <Sidebar />
      </div>
      <section className="profile__clothessection">
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingItems={clothingItems}
          onCreateModal={onCreateModal}
        />
      </section>
    </div>
  );
};

export default Profile;