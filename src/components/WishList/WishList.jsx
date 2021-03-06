import { useEffect } from "react";

import { Grid } from "@material-ui/core";
import { Header, WishTile, ShopNow } from "../../components";
import { EmptyWishlist } from "../../images";

import { useProduct } from "../../context";

export const WishList = () => {
  const { productsState } = useProduct();

  const loadList = () => {};
  useEffect(
    () => {
      loadList(); //trying load the list without causing any side effect
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div>
      <Header />

      <div style={{ minHeight: "70vh", padding: "20px" }}>
        <>
          {/* {productsState?.wishlistItems ? ( */}
          <>
            {productsState?.wishlistItems?.length > 0 ? (
              <Grid container>
                {productsState?.wishlistItems?.map((wish, id) => (
                  <Grid item key={id}>
                    <WishTile details={wish} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid style={{ marginTop: "20px" }}>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <img src={EmptyWishlist} alt="empty-wishlist" />
                  </div>
                  <div
                    style={{
                      marginBottom: "20px",
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#ff3f6ccc",
                    }}
                  >
                    It feels so light...
                  </div>
                </div>
                <ShopNow />
              </Grid>
            )}
          </>
          {/* ) : (
            <Loader />
          )} */}
        </>
      </div>
    </div>
  );
};
