describe("wiseBacronyms", function() {
  it("displays the bacronym 'Accept differences' for the letter 'a'", function() {
    wiseBacronyms("a").should.equal("Accept differences");
  });
  it("displays a bacronym for an entire word or phrase", function() {
    wiseBacronyms("cab").should.equal("Count your blessings Accept differences Be kind");
  });
});