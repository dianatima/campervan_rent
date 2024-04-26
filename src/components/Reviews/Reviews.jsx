import {
    BlocksWrap,
    ReviewWrap,
    UserBlock,
    Avatar,
    InfoWrap,
    Name,
    Rating,
    ReviewBlock,
    Text,
    StarIconGold,
    StarIconGray,
  } from "./Reviews.styled";
  
  export const Reviews = (reviews) => {
    return (
      <>
        <BlocksWrap>
          {reviews.reviews.length &&
            reviews.reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
              return (
                <ReviewWrap key={reviewer_name}>
                  <UserBlock>
                    <Avatar>{reviewer_name.slice(0, 1)}</Avatar>
                    <InfoWrap>
                      <Name>{reviewer_name}</Name>
                      <Rating>
                        {[...Array(5)].map((star, i) => {
                          return i < reviewer_rating ? (
                            <StarIconGold key={i} />
                          ) : (
                            <StarIconGray key={i} />
                          );
                        })}
                      </Rating>
                    </InfoWrap>
                  </UserBlock>
                  <ReviewBlock>
                    <Text>{comment}</Text>
                  </ReviewBlock>
                </ReviewWrap>
              );
            })}
        </BlocksWrap>
      </>
    );
  };
  