import { toast } from "sonner";


const theReadListIdHolder = () => {
  const storedListStr = localStorage.getItem("read-list"); // add kora string ta nilam local theke
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr); // string ta ke abar json obj banalam
    return storedList;
  } else {
    return [];
  }
};

const addingIdToReadList = (id) => {
  const existingList = theReadListIdHolder();
  if (existingList.includes(id)) {
    toast.error("Already read this book!");
  } else {
    existingList.push(id);
    // also sending this data to local-storage:
    const storedListStr = JSON.stringify(existingList); // karon local storage e string hishebe e rakha lage
    localStorage.setItem("read-list", storedListStr); // ki naam e rakhbo, ki rakhbo - ei duita parameter deya lage
    // ekhane const er naam same dibo naki na (storedListStr), doesn't matter. kintu ki naam e store kortesi (ekhane 'read-list', eta important)
    toast.success("Added Book to your Read-List");

    // Removing the book from wish-list after it's read (amar paknami):
    const checkWishListStr = localStorage.getItem("wish-list");
    const checkWishList = JSON.parse(checkWishListStr);
    if (checkWishList.includes(id)) {
      const index = checkWishList.indexOf(id);
      if (index > -1) {
        checkWishList.splice(index, 1);
        const storedListStr = JSON.stringify(checkWishList);
        localStorage.setItem("wish-list", storedListStr);
      }
    } // kaaj korse yo!
  }
};

const theWishListIdHolder = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addingIdtoWishList = (id) => {
  const existingList = theWishListIdHolder();
  const checkReadListStr = localStorage.getItem("read-list");
  const checkReadList = JSON.parse(checkReadListStr);
  if (checkReadList.includes(id)) {
    toast.error("Read Books can't be in Wish-List!");
  } else {
    if (existingList.includes(id)) {
        toast.error("Book already exists in Wish-List!");
    } else {
      existingList.push(id);
      const storedListStr = JSON.stringify(existingList);
      localStorage.setItem("wish-list", storedListStr);
      toast.success("Added Book to your Wish-List!");
    }
  }
};

export {
  addingIdToReadList,
  addingIdtoWishList,
  theReadListIdHolder,
  theWishListIdHolder,
};
// ei export e default dile import er time e show e kore na.
