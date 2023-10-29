import React from "react";

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
  constructor(props: Props) {
    super(props);

    const savedResults = localStorage.getItem("searchResults");
    const parsedResults = savedResults ? JSON.parse(savedResults) : [];
    const lastSearchTerm = localStorage.getItem("lastSearchTerm") || "";

    this.state = {
      searchTerm: lastSearchTerm,
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
    const { searchTerm } = this.state;
    try {
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
      localStorage.setItem("lastSearchTerm", searchTerm);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
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
