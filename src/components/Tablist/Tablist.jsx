import React from "react";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

const Tablist = () => {
  const { TabPane } = Tabs;

  return (
    <Tabs defaultActiveKey="1" centered size="large">
      <TabPane tab="Description" key="1">
        <div className="container">
          <p className="text-base">
            We aim to show you accurate product information. Manufacturers,
            suppliers and others provide what you see here, and we have not
            verified it. See our disclaimer #1 New York Times Bestseller A Reese
            Witherspoon x Hello Sunshine Book Club Pick “I can’t even express
            how much I love this book! I didn’t want this story to end!”–Reese
            Witherspoon “Painfully beautiful.”–The New York Times Book Review
            “Perfect for fans of Barbara Kingsolver.”–Bustle For years, rumors
            of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the
            North Carolina coast. So in late 1969, when handsome Chase Andrews
            is found dead, the locals immediately suspect Kya Clark, the
            so-called Marsh Girl. But Kya is not what they say. Sensitive and
            intelligent, she has survived for years alone in the marsh that she
            calls home, finding friends in the gulls and lessons in the sand.
            Then the time comes when she yearns to be touched and loved. When
            two young men from town become intrigued by her wild beauty, Kya
            opens herself to a new life–until the unthinkable happens. Perfect
            for fans of Barbara Kingsolver and Karen Russell, Where the Crawdads
            Sing is at once an exquisite ode to the natural world, a
            heartbreaking coming-of-age story, and a surprising tale of possible
            murder. Owens reminds us that we are forever shaped by the children
            we once were, and that we are all subject to the beautiful and
            violent secrets that nature keeps WHERE THE CRAWDADS LP
          </p>
        </div>
      </TabPane>
      <TabPane tab="Product Details" key="2">
        <div className="container max-w-lg">
          <div className="flex justify-between p-4 tabs">
            <p className="text-lg font-medium">IDBook</p>
            <p className="text-lg">12181544</p>
          </div>
          <div className="flex justify-between p-4 tabs">
            <p className="text-lg font-medium">Category:</p>
            <p className="text-lg">
              <Link className="heart" to="/">
                Romance
              </Link>
            </p>
          </div>
          <div className="flex justify-between p-4 tabs">
            <p className="text-lg font-medium">Book Author:</p>
            <p className="text-lg">
              <Link className="heart" to="/">
                Paul Nguyen
              </Link>
            </p>
          </div>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default Tablist;
