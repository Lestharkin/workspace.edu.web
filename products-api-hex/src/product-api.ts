import ProductManagementService from './product/app/service/ProductServiceUseCase'
import ProductManagementUseCase from './product/app/usecase/ProductManagementUseCase'
import ExpressServer from './product/infrastructure/framework/express/ExpressServer'
import ErrorController from './product/infrastructure/framework/express/controller/ErrorController'
import ProductController from './product/infrastructure/framework/express/controller/ProductController'
import ErrorRouter from './product/infrastructure/framework/express/router/ErrorRouter'
import ProductsRouter from './product/infrastructure/framework/express/router/ProductRouter'
import ProductRepositoryJsonAdapter from './product/infrastructure/repository/json/ProductRepositoryJsonAdapter'

const productAPI = new ExpressServer(
  new ProductsRouter(
    new ProductController(
      new ProductManagementUseCase(
        new ProductManagementService(
          new ProductRepositoryJsonAdapter()
        )
      )
    )
  ),
  new ErrorRouter(new ErrorController())
)

productAPI.start()
