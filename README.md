# API Whisperer – Developer Portal Software

![Static Badge](https://img.shields.io/badge/release-v1.1.0-blue)

This project was generated with [create-api-whisperer](https://github.com/steidlereu/create-api-whisperer) and contains [API Whisperer](https://github.com/steidlereu/api-whisperer).

## Documentation

See the [API Whisperer Documentation](https://api-whisperer.io).

## Overwrites

- `config.json`: Configure your developer portal  
- `/content`: Place your individual content here, such as *.md files or OpenAPI specs

## Deployment

### Web Hosting

Copy your `config.json` and your `/content` folder into `/app/assets`, then upload your app to any shared web hosting provider of your choice.

### Docker

Use either [Docker Compose](https://docs.docker.com/compose/) with the command  
`docker compose up --build --force-recreate --detach`  
or use [Kubernetes](https://kubernetes.io/) with a ConfigMap to mount `config.json` and `/content`.

## 📄 License

This project is licensed under a [Customized MIT License](./LICENSE.txt)!

- ✅ Free for personal use and small businesses  
  (fewer than 10 employees **and** under €2M annual revenue)  
- ❌ Not permitted for resale, commercial SaaS, or use by larger organizations  
- 📬 [Commercial licenses available](mailto:info@steidler.eu)

Please refer to the [LICENSE.txt](./LICENSE.txt) file for full terms and conditions.

## Further Help

See the [API Whisperer Project](https://github.com/steidlereu/api-whisperer).

## Powered by [Steidler IT-Consulting](https://www.steidler.eu/)

![Steidler IT-Consulting](https://www.steidler.eu/content/images/2023/09/png2.png)

Made with ❤️ in Europe!
