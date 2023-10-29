import React from "react";

// Define the types for props and state
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type SearchResult = {
  name: string;
  url: string;
};

type State = {
  searchTerm: string;
  results: SearchResult[];
  loading: boolean;
};

class App extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: "",
  //     results: [],
  //     loading: false,
  //   };
  constructor(props: Props) {
    super(props);

    const savedResults = localStorage.getItem("searchResults");
    const parsedResults = savedResults ? JSON.parse(savedResults) : [];

    this.state = {
      searchTerm: "",
      results: parsedResults,
      loading: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value });
  }

  async handleSearch() {
    this.setState({ loading: true });

    try {
      const { searchTerm } = this.state;
      const response = await fetch(`https://pokeapi.co/api/v2/${searchTerm}`);
      const data = await response.json();

      let newResults = [];
      if (data.results && Array.isArray(data.results)) {
        newResults = data.results;
      } else {
        newResults = [{ name: data.name, url: data.species.url }];
      }

      this.setState({
        results: newResults,
        loading: false,
      });

      localStorage.setItem("searchResults", JSON.stringify(newResults));
    } catch (error) {
      this.setState({
        results: [],
        loading: false,
      });
    }
  }

  render() {
    const { searchTerm, loading, results } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleSearch}>
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}

        <div>
          {results.map((result, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <h3>{result.name}</h3>
              <p>URL: {result.url}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
