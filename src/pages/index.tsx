import { Route, Routes } from "react-router-dom";
import { TrendPage } from "./TrendPage/TrendPage";
import { ChannelPage } from "./ChannelPage/ChannelPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TrendPage />} />
      <Route path="/channel">
        <Route path=":channelId" element={<ChannelPage />} />
      </Route>
    </Routes>
  );
};
