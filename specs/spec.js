describe("wiseBacronyms", function() {
  it("displays the bacronym 'Accept differences' for the letter 'a'", function() {
    wiseBacronyms("a").should.equal("Accept differences");
  });
  it("displays a bacronym for more than one letter", function() {
    wiseBacronyms("cab").should.equal("Count your blessings Accept differences Be kind");
  });
  it("leaves spaces and punctuation unaltered", function() {
    wiseBacronyms("o k").should.equal("Open your mind  Keep confidence");
  });
});