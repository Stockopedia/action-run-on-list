# Run On List Action

Allows you to run a command for each item in a list

## Usage

```yaml
- uses: Stockopedia/action-run-on-list
  with:
    list: '["one", "two", "three"]'
    command: |
      echo $item 
```
