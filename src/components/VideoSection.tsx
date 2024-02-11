import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

type SceneConfig = {
  position: { x: number; y: number; z: number };
  lookAt: { x: number; y: number; z: number };
  light: { x: number; y: number; z: number };
  embedID: string[];
};

export default function VideoSection({
  handleChange,
}: {
  handleChange: SceneConfig;
}) {
  return (
    <div className="absolute bottom-0 w-full flex justify-evenly items-center">
      <YoutubeEmbed embedId={handleChange.embedID[0]} />
      <YoutubeEmbed embedId={handleChange.embedID[1]} />
      <YoutubeEmbed embedId={handleChange.embedID[2]} />
    </div>
  );
}
